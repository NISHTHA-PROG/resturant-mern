import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate} from "react-router-dom";
import { Calendar, LogOut, Package, ShoppingCart, UserCircle } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const {navigate,user,setUser,axios,cartCount}=useContext(AppContext);
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const [isProfileOpen,setIsProfileOpen]=useState(false)

  const logout=async()=>{
    try{
       const {data}=await axios.post("/api/auth/logout");
       if(data.success){
        setUser(null);
        toast.success(data.message);
        navigate("/");
       }
    } catch (error) {
        console.log(error);
        
    }
 };
  return(
     <nav className="bg-black shadow-md sticky top-0 z-50 py-3">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">

        {/*  Left-logo */}
        <div className="flex items-center">
         <Link to="/" className="text-2xl fond-bold text-blue-600">
         <img src="./logo.png" alt="" className="w-32" /></Link>
        </div>

        {/* Center -Menu Items {DESKTOP} */}
      <div className="flex items-center space-x-8">
      <Link to={"/"} className="text-white hover:text-purple-300 text-2xl
       transition-colors font-medium"
            >Home</Link>

            <Link 
            to={"/menu" }
            className="text-white hover:text-purple-300 text-2xl
       transition-colors font-medium"
            >Menus</Link>

             <Link
              to={"/book-table"}
              className="text-white hover:text-purple-300 transition-colors font-medium text-2xl"
            >
              Book Table
            </Link>

            <Link to={"/contact"} className="text-white hover:text-purple-300 text-2xl
       transition-colors font-medium"
            >Contact</Link>
      </div>

      {/* Right- cart & Login/Profile */}
    
      <div className="flex items-center space-x-4">
        <button onClick={()=>navigate("/cart")} className="relative p-2 hover:bg-purple-500 rounded-lg
         transition-colors">
          <ShoppingCart size={22} className="text-white"/> 
          <span className="absolute -top-1 -right-1 bg-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center
           justify-center font-medium">{cartCount>0 ? cartCount :0}</span>
        </button>
               <div className="hidden md:block">
           {
            user?(<div
  className="relative"
  onMouseEnter={() => setIsProfileOpen(true)}
  onMouseLeave={() => setIsProfileOpen(false)}
>
  <button className="p-2 bg-white hover:bg-gray-300 rounded-lg transition-colors">
    <UserCircle size={30} className="text-gray-700" />
  </button>

  {isProfileOpen && (
    <div className="absolute right-0 top full mt-0 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">

                        <Link to={"/my-bookings"}
                          className="flex items-center px-4 py-2
                           text-gray-700 hover:bg-gray-100 transition-colors">
                        <Calendar size={18} className="mr-3"/>
                        My Bookings
                        </Link>

                          <Link to={"/my-orders"}
                          className="flex items-center px-4 py-2
                           text-gray-700 hover:bg-gray-100 transition-colors">
                        <Package size={18} className="mr-3"/>
                        My Orders
                        </Link>
                        <button 
                           onClick={logout}
                          className="flex items-center w-full px-4 py-2 
                            text-red-600 hover:bg-red-50 transition-colors">
                          <LogOut size={18} className="mr-3" />
                          Logout</button>
                  </div>
                )
              }


          </div >
         ):(
  <div className="flex gap-2">
    <button
      onClick={() => navigate("/login")}
      className="bg-white text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors font-medium cursor-pointer">
      User Login
    </button>

    <button
      onClick={() => navigate("/admin")}
      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium cursor-pointer">
      Admin Login
    </button>
  </div>
)
           }
      
               </div>
               </div>
                 </div>
              {/* MObile-menu */}
                   {isMenuOpen&&(
             <div className="md:hidden py-4 border-t border-gray-200">

          <div className="flex flex-col space-y-3">
            <Link to={"/"} className="text-white hover:text-purple-300 text-xl
              transition-colors font-medium"
            >Home</Link>

            <Link 
            to={"/menu" }
            className="text-white hover:text-purple-300 text-xl
       transition-colors font-medium"
            >Menus</Link>

            <Link
              to={"/book-table"}
              className="text-white hover:text-purple-300 text-xl transition-colors font-medium"
            >
              Book Table
            </Link>

            <Link to={"/contact"}
             className="text-white hover:text-purple-300 text-xl
                    transition-colors font-medium"
            >Contact
            </Link>
           { user?(<div
  className="relative"
  onMouseEnter={() => setIsProfileOpen(true)}
  onMouseLeave={() => setIsProfileOpen(false)}
>
  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
    <UserCircle size={30} className="text-gray-700" />
  </button>

  {isProfileOpen && (
    <div className="absolute right-0 top-full mt-0 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                        <Link to={"/my-bookings"}
                          className="flex items-center px-4 py-2
                           text-gray-700 hover:bg-gray-100 transition-colors">
                        <Calendar size={18} className="mr-3"/>
                        My Bookings
                        </Link>

                          <Link to={"/my-orders"}
                          className="flex items-center px-4 py-2
                           text-gray-700 hover:bg-gray-100 transition-colors">
                        <Package size={18} className="mr-3"/>
                        My Orders
                        </Link>
                        <button onClick={logout} className="flex items-center w-full px-4 py-2 
                        text-red-600 hover:bg-red-50 transition-colors">
                          <LogOut size={18} className="mr-3" />
                          Logout</button>
                  </div>
                )
              }


          </div >
          ):(
  <div className="flex flex-col gap-2">
    <button
      onClick={() => navigate("/login")}
      className="bg-white text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors font-medium cursor-pointer">
      User Login
    </button>

    <button
      onClick={() => navigate("/admin")}
      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium cursor-pointer">
      Admin Login
    </button>
  </div>
)
           }




          </div>
          
        </div>
      )}
    </div>

  </nav>
  );
}
export default Navbar;