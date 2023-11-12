import { createSlice } from "@reduxjs/toolkit";
import toast, { Toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQTY: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload;
      console.log(state.cartState);
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuntity += 1;
        toast.success(`Item QTY has increased!`);
      } else {
        const temp = { ...action.payload, cartQuntity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart!`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from your Cart.`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuntity += 1;
        toast.success(`Item QTY has increased!`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuntity > 1) {
        state.cartItems[itemIndex].cartQuntity -= 1;
        toast.success(`Item QTY has decreased!`);
      } else {
        const removeItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = removeItem;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success("Cart is cleared succesfully!");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotal: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuntity } = cartItem;
          const totalPrice = price * cartQuntity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuntity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQTY = totalQTY;
    },
  },
});

export const selectCartState = (state) => state.CartSlice.cartState;
export const selectCartItems = (state) => state.CartSlice.cartItems;
export const selectTotalAmount = (state) => state.CartSlice.cartTotalAmount;
export const selectTotalQTY = (state) => state.CartSlice.cartTotalQTY;

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
