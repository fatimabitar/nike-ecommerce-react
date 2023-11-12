import React from "react";
import emptybag from "../../assets/emptybag.png";
import { FaArrowLeft } from "react-icons/fa";

const CartEmpty = ({onCartToggle}) => {
  return (
    <div className="flex flex-col items-center  justify-center h-screen">
      <img
        src={emptybag}
        alt=""
        className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
      />
      <button
        type="button"
        onClick={onCartToggle}
        className="button-theme mt-10 bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-400
        flex items-center justify-center text-slate-900 py-2 font-semibold text-sm px-5 active:scale-110"
      >
        <FaArrowLeft className="inline text-[30px] mr-3" />
        <span className="capitalize">Back To nike store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
