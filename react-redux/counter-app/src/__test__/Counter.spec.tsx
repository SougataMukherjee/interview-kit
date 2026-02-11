import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import Counter from '../domain/counter/components/Counter'
import {describe, expect, it,beforeEach } from 'vitest'
import { reset } from '../domain/counter/actions/counterActions'

describe('Counter components',()=>{
  beforeEach(() => {
  store.dispatch(reset())
})
    it('increments counter', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    // click "+" button
    fireEvent.click(screen.getByRole('button', { name: 'increment' }))

    // assert updated counter
    expect(screen.getByText(/counter:\s*1/i)).toBeInTheDocument()
  })
  it('decrement counter', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  // click "-" button
  fireEvent.click(screen.getByRole('button', { name: 'decrement' }))

  // assert updated counter
  expect(screen.getByText(/counter:\s*-1/i)).toBeInTheDocument()
})
})
