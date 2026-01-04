function isEqual(a, b) {
  if (a.length !== b.length) return false;
  a.sort(); b.sort();
  return a.every((v, i) => v === b[i]);
}