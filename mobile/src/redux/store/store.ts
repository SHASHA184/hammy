import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '../auth';
import { cartReducer } from '../cart';
import { ProductAPI } from '../API';
import { OrderAPI } from '../API/OrderAPI/OrderAPI';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [ProductAPI.reducerPath]: ProductAPI.reducer,
    [OrderAPI.reducerPath]: OrderAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(ProductAPI.middleware)
      .concat(OrderAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
