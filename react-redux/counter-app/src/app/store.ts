import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from '../domain/counter/reducers/counterReducer';
import todoReducer from '../domain/todo/reducers/todoReducer';
import galleryReducer from '../domain/image-gallery/reducers';
// import { galleryWatcherSaga } from '../domain/image-gallery/sagas/gallerySaga';
import gallerySearchReducer from '../domain/search-filter/reducers';
// import { gallerySaga } from '../domain/search-filter/sagas/gallerySaga';
import { rootReducer } from '../domain/shop-kart/reducers';
import rootSaga from '../domain/shop-kart/sagas';

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  counter: counterReducer
})

export const store = configureStore({
  reducer: {
    app: appReducer,
    todo: todoReducer,
    gallery: galleryReducer,
    gallerySearch:gallerySearchReducer,
    root:rootReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
// sagaMiddleware.run(galleryWatcherSaga);
// sagaMiddleware.run(gallerySaga);
sagaMiddleware.run(rootSaga);

// Types for hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
