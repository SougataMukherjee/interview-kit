import { createSelector } from 'reselect';
import type { RootState } from '../reducers';

const productState = (state: RootState) => state.products;

export const getProducts = createSelector(
  [productState],
  (products) => products?.data || []
);
