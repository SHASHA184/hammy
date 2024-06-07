import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TAGS from '../tags';
import { BASE_URL } from '../constants';
import { Order, OrderCreateData } from './types';

export const OrderAPI = createApi({
  reducerPath: 'OrderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: [TAGS.ORDERS],
  endpoints: builder => ({
    createOrder: builder.mutation<Order, OrderCreateData>({
      query: body => ({
        url: '/orders/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: [TAGS.ORDERS],
    }),
  }),
});

export const { useCreateOrderMutation } = OrderAPI;
