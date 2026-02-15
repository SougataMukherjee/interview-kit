import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from '../domain/counter/reducers/counterReducer';
import todoReducer from '../domain/todo/reducers/todoReducer';
import galleryReducer from '../domain/image-gallery/reducers';
import { galleryWatcherSaga } from '../domain/image-gallery/sagas/gallerySaga';

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  counter: counterReducer
})

export const store = configureStore({
  reducer: {
    app: appReducer,
    todo: todoReducer,
    gallery: galleryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
sagaMiddleware.run(galleryWatcherSaga);

// Types for hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
