import { createSelector } from 'reselect';
import type { RootState } from '../reducers';

const cartState = (state: RootState) => state.cart;

export const getCartItems = createSelector(
  [cartState],
  (cart) => cart?.data || []
);
