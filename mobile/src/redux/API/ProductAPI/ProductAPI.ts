import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TAGS from '../tags';
import { BASE_URL } from '../constants';
import { Product } from './types';

export const ProductAPI = createApi({
  reducerPath: 'ProductAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: [TAGS.PRODUCTS],
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: [TAGS.PRODUCTS],
    }),
    getProductById: builder.query<Product, number>({
      query: id => `/product/${id}`,
      providesTags: [TAGS.PRODUCTS],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = ProductAPI;
