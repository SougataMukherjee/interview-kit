/* eslint-disable react-hooks/refs */
import React from "react";

export const useInitialMount = (): boolean => {
  const isFirst: React.RefObject<boolean> = React.useRef<boolean>(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
};
