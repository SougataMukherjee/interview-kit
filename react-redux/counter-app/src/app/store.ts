import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from '../domain/counter/reducers/counterReducer';
import todoReducer from '../domain/todo/reducers/todoReducer'

const appReducer = combineReducers({
  counter: counterReducer
})

export const store = configureStore({
  reducer: {
    app: appReducer,
    todo: todoReducer,
  }
})

// Types for hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
