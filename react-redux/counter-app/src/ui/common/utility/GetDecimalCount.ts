export const getDecimalCount: (value: number) => number = (value: number) =>
  Math.floor(value) === value ? 0 : value.toString().split('.')[1].length;