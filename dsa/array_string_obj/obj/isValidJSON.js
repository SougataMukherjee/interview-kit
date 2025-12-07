function isValidJSON(json) {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('{"id":1}')); // true
