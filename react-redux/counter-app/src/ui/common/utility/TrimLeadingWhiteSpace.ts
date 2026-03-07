export const TrimLeadingWhiteSpace = (value: string): string => {
  const whiteSpaceExp: RegExp = /^\s+/;
  return value.replace(whiteSpaceExp, "");
};
