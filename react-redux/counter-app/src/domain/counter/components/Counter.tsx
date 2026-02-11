import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement ,reset} from '../actions/counterActions'
import { selectCounterValue } from '../selectors/counterSelectors';
import BackgroundBox from '../../../ui/components/background-box/components';
import { BackgroundBoxVariant } from '../../../ui/components/background-box/enums'

const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCounterValue)

  return (
    <BackgroundBox variant={BackgroundBoxVariant.PRIMARY}>
      <h2>Counter: {count}</h2>

      <button aria-label="increment" onClick={() => dispatch(increment())}>
        +
      </button>

      <button aria-label="decrement" onClick={() => dispatch(decrement())}>
        -
      </button>

      <button aria-label="reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </BackgroundBox>
  )
}

export default Counter
