function isArraySorted(n,arr){
    if(n===0||n===1){
        return true
    }
    return arr[n-1]>=arr[n-2]&&isArraySorted(n-1,arr)
}
console.log(isArraySorted(5,[1,2,3,4,5]))//true
console.log(isArraySorted(5,[1,4,3,2,5]))//false