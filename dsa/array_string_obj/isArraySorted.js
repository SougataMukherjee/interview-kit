function isSorted(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]){
          count++;
        }
    }
    //rotation condition
    if (arr[0] < arr[arr.length - 1]) {
      count++;
    }
  return count <= 1;
}
console.log(isSorted([6,7,1,2,3,4,5]))//true
console.log(isSorted([1,2,3,4,5,6,7]))//true
console.log(isSorted([1,2,3,4,6,5,7]))//false
