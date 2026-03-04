import * as React from 'react';

export type ToggleStateAction = () => void;

export const useToggle = (
  initialState: boolean = false
): [boolean, ToggleStateAction] => {
  const [state, setState] = React.useState<boolean>(initialState);

  // Function to toggle the state value
  const onToggleState = React.useCallback(
    () => setState(prevState => !prevState),
    []
  );

  return [state, onToggleState];
};