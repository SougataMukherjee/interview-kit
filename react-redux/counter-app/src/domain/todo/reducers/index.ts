import { combineReducers } from 'redux'
import todoReducer, {type TodoState } from './todoReducer'

export interface RootState {
  todo: TodoState
}

const rootReducer = combineReducers({
  todo: todoReducer,
})

export default rootReducer
