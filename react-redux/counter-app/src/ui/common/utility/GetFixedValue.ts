export const getFixedValue = (
  value: number | string,
  decimalCount: number
): string =>
  (value || value === 0) && !Number.isNaN(Number(value))
    ? Number(value).toFixed(decimalCount)
    : '';