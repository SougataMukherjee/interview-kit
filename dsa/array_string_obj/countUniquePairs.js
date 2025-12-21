function countUniquePairs(arr, n){
    let s = new Set();
    for (let i = 0; i < n; i++)
    {
        s.add(arr[i]);
    }
    let count = Math.pow(s.size, 2);
    
    return count;
}
let arr = [ 1, 2, 2, 4, 2, 5, 3, 5 ];
let n = arr.length;
console.log(countUniquePairs(arr, n))