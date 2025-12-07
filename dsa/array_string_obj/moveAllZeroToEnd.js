function moveZeros(arr) {
  let arr1 = [];
  let arr2 = [];

  for (let num of arr) {
    if (num === 0) arr1.push(num);
    else arr2.push(num);
  }

  return [...arr2, ...arr1];
}

console.log(moveZeros([1, 0, 3, 0, 5])); 
// [1, 3, 5, 0, 0]

//console.log(arr.sort((a,b)=>(a===0)-(b===0)));