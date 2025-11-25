//find if one string is a rotation of another string ABCD->CDAB

function isRotation(a, b) {
  if (a.length !== b.length) return false;
  return (a + a).includes(b);
}
console.log(isRotation("ABCD", "CDAB")); // true