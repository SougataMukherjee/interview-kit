let arr = [1, 2, 0, 2, 1, 0],
  j = 0,
  temp;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    if (i !== j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    j++;
  }
}
console.log(arr);

//console.log(arr.sort((a,b)=>(a===0)-(b===0)));