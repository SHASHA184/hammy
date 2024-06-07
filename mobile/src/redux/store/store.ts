import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '../auth';
import { ProductAPI } from '../API';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [ProductAPI.reducerPath]: ProductAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ProductAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
