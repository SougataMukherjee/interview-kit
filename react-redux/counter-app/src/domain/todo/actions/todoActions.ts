// Action Types
export const ADD_TODO = 'ADD_TODO' as const
export const TOGGLE_TODO = 'TOGGLE_TODO' as const
export const REMOVE_TODO = 'REMOVE_TODO' as const

// Types
export interface Todo {
  id: number
  text: string
  completed: boolean
}

// Action Interfaces
export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: number
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO
  payload: number
}

export type TodoActions =
  | AddTodoAction
  | ToggleTodoAction
  | RemoveTodoAction

// Action Creators
export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
})

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
})
