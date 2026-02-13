import { createSelector } from 'reselect'
import type { RootState } from '../reducers'

const getTodoState = (state: RootState) => state.todo

export const getTodoList = createSelector(
  [getTodoState],
  (todo) => todo.list
)

export const getPendingCount = createSelector(
  [getTodoList],
  (list) => list.filter((t) => !t.completed).length
)
