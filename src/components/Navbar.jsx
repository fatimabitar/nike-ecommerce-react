import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart(true));
  };
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      onNavScroll();
    };
  }, []);
  return (
    <>
      <header
        className={`w-full ${
          !navState
            ? "absolute top-7 left-0 z-50"
            : "fixed top-0 left-0 h-[9vh] flex items-center justify-center z-50 blur-effect-theme"
        }`}
      >
        <nav className="flex items-center justify-between nike-container">
          <div>
            <img
              src={logo}
              alt=""
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center gap-2">
            <li className="grid items-center">
              <FaSearch
                className={`icon-style ${navState && "text-slate-900"}`}
              />
            </li>
            <li className="grid items-center">
              <FaHeart
                className={`icon-style ${navState && "text-slate-900"}`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="flex items-center border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <FaShoppingCart
                  className={`icon-style ${navState && "text-slate-900"}`}
                />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-900 shadow
                 shadow-slate-100 w-4 h-4 text-[0.65rem] font-medium rounded-full
                 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
