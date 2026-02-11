import { INCREMENT, DECREMENT ,RESET} from '../constants/counterConstants'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const reset = () => ({
  type: RESET,
} as const)

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
