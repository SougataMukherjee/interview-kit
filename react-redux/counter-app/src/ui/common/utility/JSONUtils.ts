export function isJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}

export function parseJson(jsonString?: string) {
  if (jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
  return undefined;
}
