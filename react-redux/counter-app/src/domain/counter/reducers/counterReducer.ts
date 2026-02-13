import type { CounterState } from '../interfaces/interface'
import type { CounterAction } from '../actions/counterActions'
import { INCREMENT, DECREMENT ,RESET } from '../constants/counterConstants'

const initialState: CounterState = {
  value: 0
}

export const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value + 1 }

    case DECREMENT:
      return {...state, value: state.value - 1 }

    case RESET:
      return initialState

    default:
      return state
  }
}
