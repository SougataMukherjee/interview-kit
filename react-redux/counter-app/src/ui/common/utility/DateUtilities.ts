export const convertDateToYearMonthDay = (
  estimatedDateOfAvailability: Date | undefined
): string => {
  if (estimatedDateOfAvailability === undefined) return '';

  return estimatedDateOfAvailability.toLocaleDateString('en-ZA');
};

export const convertDateToMonthDayYear = (
  estimatedDateOfAvailability: Date
): string => {
  return estimatedDateOfAvailability.toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (date: Date | string, locale = 'en-US'): string =>
  new Date(date).toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });