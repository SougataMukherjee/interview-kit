import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchItemsApi } from '../services/galleryService';
import * as C from '../constants/galleryConstants';
import type { SagaIterator } from 'redux-saga';

function* fetchItemsWorker():SagaIterator {
  console.log('SAGA: fetchImagesSaga START');
  const data = yield call(fetchItemsApi);
  console.log('✅ SAGA: images fetched', data);
  yield put({ type: C.FETCH_ITEMS_SUCCESS, payload: data });
}

export function* gallerySaga() {
  yield takeLatest(C.FETCH_ITEMS_REQUEST, fetchItemsWorker);
}
