import { all, fork } from 'redux-saga/effects';
import { galleryWatcherSaga } from './gallerySaga';

export default function* rootSaga() {
  yield all([
    fork(galleryWatcherSaga)
  ]);
}