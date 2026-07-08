import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, totalPrice, navigate, axios, fetchCartData, addToCart } =
    useContext(AppContext);

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your Cart is Empty
        </h2>
      </div>
    );
  }

  async function removeFromCart(menuId) {
    try {
      const { data } = await axios.delete(`/api/cart/remove/${menuId}`);
      if (data.success) {
        toast.success(data.message);
        fetchCartData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>

      <div className="overflow-x-auto">
        
        {/* ✅ FIX 1: table-fixed */}
        <table className="min-w-full table-fixed border border-gray-200 rounded-lg">
          
          <thead className="bg-gray-100">
            <tr>
              {/* ✅ FIX 2: width define */}
              <th className="py-3 px-4 text-left w-[40%]">Item</th>
              <th className="py-3 px-4 text-center w-[20%]">Qty</th>
              <th className="py-3 px-4 text-center w-[20%]">Price</th>
              <th className="py-3 px-4 text-center w-[20%]">Total</th>
            </tr>
          </thead>

          <tbody>
            {cart?.items?.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">

                {/* ITEM */}
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <span className="font-medium text-gray-800">
                      {item.menuItem.name}
                    </span>
                  </div>
                </td>

                {/* ✅ QTY FIX */}
                <td className="py-3 px-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 w-full">
                    
                    <button
                      onClick={() => removeFromCart(item.menuItem._id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>

                    {/* ✅ FIX: width increase */}
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item.menuItem._id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>
                </td>

                {/* PRICE */}
                <td className="py-3 px-4 text-center align-middle text-gray-700">
                  ₹{item.menuItem.price}
                </td>

                {/* TOTAL */}
                <td className="py-3 px-4 text-center align-middle text-gray-700 font-semibold">
                  ₹{item.menuItem.price * item.quantity}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h3 className="text-xl font-semibold">
          Total: <span className="text-green-600">₹{totalPrice}</span>
        </h3>

        <button
          onClick={() => navigate("/checkout")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;