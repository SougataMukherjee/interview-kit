import { createSelector } from 'reselect'
import type { RootState } from '../../../app/store'

const selectCounterState = (state: RootState) => state.app.counter

export const selectCounterValue = createSelector(
  [selectCounterState],
  counter => counter.value
)
