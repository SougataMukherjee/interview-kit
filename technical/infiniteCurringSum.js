function sum(a) {
  let total = a || 0;
  
  function inner(b) {
    if (b === undefined) return total; 
    total += b;
    return inner; 
  }
  
  return inner;
}
console.log(sum(10)(20)(30)());//60