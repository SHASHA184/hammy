import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Product } from '../API';
import { addToCart, removeFromCart } from '../cart';
import useAppDispatch from './useAppDispatch';

const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addProduct = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeProduct = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return { cart, addProduct, removeProduct };
};

export default useCart;
