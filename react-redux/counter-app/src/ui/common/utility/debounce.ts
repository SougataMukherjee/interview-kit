export function debounce(handleDebounce: Function, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...newValue: any[]) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      handleDebounce(...newValue);
    }, delay);
  };
}