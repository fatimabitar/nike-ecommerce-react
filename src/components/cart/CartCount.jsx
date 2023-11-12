import React from "react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";

export const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
    <div
      className="bg-white h-11 flex items-center justify-between px-3 sticky left-0 top-0 w-full
    "
    >
      <div className="flex items-center gap-3">
        <div className="grid items-center cursor-pointer">
          <FaChevronLeft
            onClick={onCartToggle}
            className="w-5 h-5 text-slate-900
           hover:text-orange-500 transition-all duration-300 stroke-[2]"
          />
        </div>
        <div className="grid items-center">
          <h1 className="text-base font-medium text-slate-900">
            Your Cart
            <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal ml-1">
              {totalQTY} items
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={onClearCartItems}
          className="rounded bg-theme-cart text-slate-100 active:scale-90 p-0.5 stroke-[2]"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
