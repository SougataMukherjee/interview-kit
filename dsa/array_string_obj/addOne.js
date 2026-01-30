function addOne(num) {
  const a = BigInt(num);
  return (a + 1n).toString();
}

console.log(addOne("599"));//600
console.log(addOne("10000000000000000000"));//10000000000000000001