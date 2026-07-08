import Cart from "../models/cartModel.js";
import Menu from "../models/menuModel.js";
export const addToCart=async(req,res) => {
  try {
    const {menuId,quantity}=req.body;
    const {id}=req.user;

    const menuItem=await Menu.findById(menuId);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });

    let cart = await Cart.findOne({user:id});
    if (!cart) {
      cart = new Cart({ user: id, items: [] });
    }

    const existingItem = cart.items.find((item)=>item.menuItem.toString()===menuId);

    if (existingItem) {
      existingItem.quantity+=quantity;
    } else {
      cart.items.push({menuItem:menuId,quantity });
    }

    await cart.save();
    res
      .status(200)
      .json({ message: "Item added to cart", success: true, cart });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", success: false });
  }
};

// Get user cart
export const getCart=async(req,res)=>{
  try {
    const {id}=req.user;
    const cart=await Cart.findOne({user:id}).populate("items.menuItem");
    if (!cart) return res.status(200).json({ items: [] });
    res.status(200).json({cart, success: true});
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error", success: false });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { menuId } = req.params;

    const cart = await Cart.findOne({ user: id });
    if (!cart)
      return res.status(404).json({ message: "Cart not found" });

    // 🔥 item find karo
    const itemIndex = cart.items.findIndex(
      (item) => item.menuItem.toString() === menuId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    // 🔥 MAIN LOGIC
    if (cart.items[itemIndex].quantity > 1) {
      // quantity decrease
      cart.items[itemIndex].quantity -= 1;
    } else {
      // quantity = 1 → remove item
      cart.items.splice(itemIndex, 1);
    }

    await cart.save();

    res.status(200).json({
      message: "Cart updated",
      success: true,
      cart,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal server error",
      success: false,
    });
  }
};