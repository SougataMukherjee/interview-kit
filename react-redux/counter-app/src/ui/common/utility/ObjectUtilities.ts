/**
 * @param value object
 */
export const isMergeableObject = (value: any) => {
  const nonNullObject = value && typeof value === "object";

  return (
    nonNullObject &&
    Object.prototype.toString.call(value) !== "[object RegExp]" &&
    Object.prototype.toString.call(value) !== "[object Date]"
  );
};

/**
 * Method to check if the object is null or undefined
 * @param obj object
 */
export const isNullOrUndefined = (obj: any) => {
  return obj === null || typeof obj === "undefined";
};

/**
 * Method to check if the object is defined
 * @param obj object
 */
export const isDefined = (obj: any) => {
  return !isNullOrUndefined(obj);
};
