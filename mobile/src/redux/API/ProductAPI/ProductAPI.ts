import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TAGS from '../tags';
import { BASE_URL } from '../constants';
import { Product } from './types';

const getFilteredProductURL = (name: string) =>
  name ? `/products?name=${name}` : '/products';

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
    getProducts: builder.query<Product[], string>({
      query: name => getFilteredProductURL(name),
      providesTags: [TAGS.PRODUCTS],
    }),
    getProductById: builder.query<Product, number>({
      query: id => `/products/${id}`,
      providesTags: [TAGS.PRODUCTS],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = ProductAPI;
