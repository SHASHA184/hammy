import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../API';

type CartSliceState = {
  products: Product[];
  totalPrice: number;
};

const initialState: CartSliceState = {
  products: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        item => item.id !== action.payload,
      );
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.price,
        0,
      );
    },
    clearCart: state => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export default CartSlice;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
