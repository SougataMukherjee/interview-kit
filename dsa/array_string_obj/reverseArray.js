//reverse the array without reverse()
function reverseArray(arr){
    const n = arr.length;
	//reverse first half assign j with j = Math.floor(n / 2) - 1
for (let i = 0, j = n - 1; i < j; i++, j--) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}
console.log(reverseArray([2, 4, 7, 8, 9]));