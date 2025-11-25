function print1ToN(n) {
  if (n === 0) return;
  print1ToN(n - 1);
  console.log(n);
}
console.log(print1ToN(5))

//note: print n to 1 first print console.log(n);print1ToN(n - 1);