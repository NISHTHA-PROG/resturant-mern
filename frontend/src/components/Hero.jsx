import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import backgr from "../assets/backgr.jpg";

const Hero = () => {
  const { navigate } = useContext(AppContext);
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          `url(${backgr})`}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Velvet Spoon
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {" "}
          Crafted with Love , Served with Style.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/menu")}
            className="cursor-pointer bg-green-500 hover:bg-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            All Menus
          </button>
          <button
            onClick={() => navigate("/book-table")}
            className="cursor-pointer bg-green-200 hover:bg-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-black/40"> */}



    </section>
  );
};
export default Hero;