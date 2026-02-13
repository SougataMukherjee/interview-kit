import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from '../actions/todoActions';
import type { AnyAction } from 'redux'

import type {Todo} from '../actions/todoActions';

export interface TodoState {
  list: Todo[]
}

const initialState: TodoState = {
  list: [],
}

const todoReducer = (
  state: TodoState = initialState,
  action: AnyAction
): TodoState => {
  console.log("action",action)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      }

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }

    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      }

    default:
      return state
  }
}

export default todoReducer
