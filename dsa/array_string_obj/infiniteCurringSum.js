function sum(a) {
  let total = a || 0;
  
  function inner(b) {
    //base case
    if (b === undefined) return total; 
    // recursive case
    total += b;
    // return the same function to allow chaining again
    return inner; 
  }
  // return the function to start chaining
  return inner;
}
console.log(sum(10)(20)(30)());//60