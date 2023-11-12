import React, { useEffect } from "react";
import { CartCount } from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotal,
} from "../app/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotal());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart(!ifCartState));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0  blur-effect-theme w-full h-screen z-[200]
        ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }
       `}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0  `}
        >
          <CartCount
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
            totalQTY={totalQTY}
          />
          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 z-[250]">
              <div>
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}
          <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold uppercase">Subtotal</h2>
              <h3 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                ${totalAmount}
              </h3>
            </div>
            <div className="grid items-center justify-center gap-2">
              <p className="capitalize">
                Taxes and Shipping will be calculated at shipping.
              </p>
              <button
                type="button"
                className="button-theme bg-theme-cart text-slate-100 w-44 mx-auto"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
