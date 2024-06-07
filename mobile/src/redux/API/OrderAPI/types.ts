export type OrderProduct = {
  product_id: number;
  quantity: number;
};

export type Order = {
  id: number;
  user_id: number;
  competed: boolean;
  sended: boolean;
  total_price: number;
  order_time: string;
  order_items: OrderProduct[];
};

export type OrderCreateData = {
  user_id: number;
  total_price: number;
  order_items: OrderProduct[];
};
