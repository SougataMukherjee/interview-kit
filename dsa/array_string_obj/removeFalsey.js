let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
function removeFalsey(arr) {
  // Return the first parameter of the callback function
  return arr.filter((val) => val);
}


console.log(removeFalsey(arr));//[ 23, 'gfg', true, 12, 'hi', [] ]

const truthyValues = arr.filter(Boolean);
console.log(truthyValues); // [ 23, 'gfg', true, 12, 'hi', [] ]

// Checking finite numbers:
const finiteValues = arr.filter(Number.isFinite);
console.log(finiteValues); // [ 23, 0, 12 ]