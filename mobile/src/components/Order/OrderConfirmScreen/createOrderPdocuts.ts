import { Product } from '../../../redux/API';

const createOrderProducts = (products: Product[]) => {
  return products.map(product => ({
    product_id: product.id,
    quantity: product.quantity,
  }));
};

export default createOrderProducts;
