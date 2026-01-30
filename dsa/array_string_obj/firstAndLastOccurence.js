function firstAndLastOccurence(arr, x) {
    let n = arr.length;
    
    // Initialize first and last index
    let first = -1, last = -1;
    
    for (let i = 0; i < n; i++) {
        
        // If x is different, continue
        if (x !== arr[i])
            continue;
        
        // If first occurrence found
        if (first === -1)
            first = i;
        
        // Update last occurrence
        last = i;
    }
    let res = [first, last];
    return res;
}
console.log(firstAndLastOccurence([1,2,2,2,3,4], 2)); // [1,3]
console.log(firstAndLastOccurence([1,3,5], 2));       // [-1,-1]
