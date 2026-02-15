import { call, put, takeLatest, select } from 'redux-saga/effects';
import type { SagaIterator } from 'redux-saga';
import { fetchImages } from '../services/api';
import { 
  fetchImagesSuccess, 
  fetchImagesFailure 
} from '../actions';
import { GalleryActionTypes } from '../interfaces';
import type { RootState } from '../../../app/store';

// Selector to get current page
const getPage = (state: RootState) => state.gallery.page;

// Worker saga: will be fired on FETCH_IMAGES_REQUEST actions
function* fetchImagesSaga(): SagaIterator {
  try {
    console.log('SAGA: fetchImagesSaga START');
    const page: number = yield select(getPage);
    console.log('SAGA: page', page);
    const images = yield call(fetchImages, page);
    console.log('✅ SAGA: images fetched', images);
    yield put(fetchImagesSuccess(images));
  } catch (err) {
    const error=err as Error;
    console.error('❌ Saga: Error:', error);
    yield put(fetchImagesFailure(error.message || 'An unknown error occurred'));
  }
}

// Worker saga: will be fired on LOAD_MORE_IMAGES actions
function* loadMoreImagesSaga() {
  yield put({ type: GalleryActionTypes.FETCH_IMAGES_REQUEST });
}

// Watcher saga: watches for actions and calls worker sagas
export function* galleryWatcherSaga() {
  yield takeLatest(GalleryActionTypes.FETCH_IMAGES_REQUEST, fetchImagesSaga);
  yield takeLatest(GalleryActionTypes.LOAD_MORE_IMAGES, loadMoreImagesSaga);
}