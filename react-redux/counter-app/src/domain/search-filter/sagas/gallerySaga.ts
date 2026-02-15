import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchItemsApi } from '../services/galleryService';
import * as C from '../constants/galleryConstants';

function* fetchItemsWorker() {
  const data = yield call(fetchItemsApi);
  yield put({ type: C.FETCH_ITEMS_SUCCESS, payload: data });
}

export function* gallerySaga() {
  yield takeLatest(C.FETCH_ITEMS_REQUEST, fetchItemsWorker);
}
