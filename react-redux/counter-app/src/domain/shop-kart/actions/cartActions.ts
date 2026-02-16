import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';
import type { Product } from '../interfaces/Product';

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id
});
