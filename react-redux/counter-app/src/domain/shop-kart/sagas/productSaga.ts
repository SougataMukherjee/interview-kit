import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS
} from '../constants/actionTypes';
import {
  fetchProductsSuccess,
  fetchProductsError
} from '../actions/productActions';
import type { SagaIterator } from 'redux-saga';

function fetchApi() {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json());
}

function* fetchProductsSaga():SagaIterator {
  try {
    const data = yield call(fetchApi);
    yield put(fetchProductsSuccess(data));
  } catch (e: any) {
    yield put(fetchProductsError(e.message));
  }
}

export function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}
