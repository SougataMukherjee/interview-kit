import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';
import type { AnyAction } from 'redux';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};
