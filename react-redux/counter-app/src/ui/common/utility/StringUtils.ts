export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const toCamelCase = (str: string): string =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

export const toKebabCase = (str: string): string =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const toSnakeCase = (str: string): string =>
  str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();

export const truncate = (str: string, maxLength: number): string =>
  str.length > maxLength ? str.substring(0, maxLength) + '...' : str;

export const isEmpty = (str: string | null | undefined): boolean =>
  !str || str.trim().length === 0;

export const removeWhitespace = (str: string): string =>
  str.replace(/\s+/g, '');

export const countWords = (str: string): number =>
  str.trim().split(/\s+/).filter(Boolean).length;

export const isPalindrome = (str: string): boolean => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};

export const formatTemplate = (
  template: string,
  values: Record<string, string>
): string =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? '');