import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../API';

type CartSliceState = {
  products: Product[];
};

const initialState: CartSliceState = {
  products: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        item => item.id !== action.payload,
      );
    },
    clearCart: state => {
      state.products = [];
    },
  },
});

export default CartSlice;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
