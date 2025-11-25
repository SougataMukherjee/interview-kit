//left rotate array by k steps let k=2 so [1,2,3,4,5]->[2,3,4,5,1]->[3,4,5,1,2]
function leftRotate(arr, k) {
  for (let x = 0; x < k; x++) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
       arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp; 
  }
  return arr;
}

console.log(leftRotate([1,2,3,4,5],2));//[ 3, 4, 5, 1, 2 ]