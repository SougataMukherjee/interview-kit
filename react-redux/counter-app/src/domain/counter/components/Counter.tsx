import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement ,reset} from '../actions/counterActions'
import { selectCounterValue } from '../selectors/counterSelectors';
import BackgroundBox from '../../../ui/components/background-box/components';
import { BackgroundBoxVariant } from '../../../ui/components/background-box/enums'
import Button,{ ButtonVariant } from '../../../ui/components/button';
import { Alert, AlertVariant } from '../../../ui/components/alert';

const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCounterValue)

  return (
    <>
    <Alert
      message="Data saved successfully!"
      variant={AlertVariant.SUCCESS}
      onClose={() => console.log('closed')}
      fullWidth
   />
    <BackgroundBox variant={BackgroundBoxVariant.PRIMARY}>
      <h2>Counter: {count}</h2>

      <Button aria-label="increment" onClick={() => dispatch(increment())}>
        increment
      </Button>

      <Button variant={ButtonVariant.OUTLINED} aria-label="decrement" onClick={() => dispatch(decrement())}>
        decrement
      </Button>

      <Button aria-label="reset" onClick={() => dispatch(reset())}>
        Reset
      </Button>
    </BackgroundBox>
</>
  )
}

export default Counter
