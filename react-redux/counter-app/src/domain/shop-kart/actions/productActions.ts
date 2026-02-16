import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../constants/actionTypes';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const fetchProductsSuccess = (data: any[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchProductsError = (error: string) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error
});
