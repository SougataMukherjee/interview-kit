import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../constants/actionTypes';
import type { AnyAction } from 'redux';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { data: action.payload, loading: false, error: null };

    case FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
