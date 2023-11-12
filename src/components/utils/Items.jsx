import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Items = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  //Add items to cart
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart(true));
  };
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow}
    grid items-center ${
      ifExists ? "justify-items-start" : "justify-items-center"
    } rounded-xl py-4 px-5
     transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={`grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } mt-3`}
      >
        <h3 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h3>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal mt-3">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 mt-3">
          <div className="flex items-center  bg-slate-50 px-1 rounded">
            <h3 className="text-black text-sm font-medium">${price}</h3>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="icon-style w-5 h-5 md:w-4 md:h-4 text-yellow-300" />
            <h4 className="md:text-sm font-normal text-slate-100">{rating}</h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 my-3">
          <button
            type="button"
            className="flex items-center justify-center icon-style text-slate-900 bg-white
          button-theme blur-effect-theme p-0.5 shadow shadow-slate-200"
            onClick={() => {
              onAddToCart();
            }}
          >
            <FaShoppingBag />
          </button>
          <button
            type="button"
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
            className="icon-style text-slate-900 bg-white px-3 w-auto
          button-theme blur-effect-theme shadow shadow-slate-200 text-sm"
          >
            {btn}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={img}
          alt=""
          className="h-36 w-64 transitions-theme hover:rotate-12"
        />
      </div>
    </div>
  );
};

export default Items;
