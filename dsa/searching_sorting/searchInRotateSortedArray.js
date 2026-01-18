function search(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = (l + r) / 2;
        if (target === arr[m]) {
            return m;
        }
        // check if left half is sorted
        if (arr[l] <= arr[m]) {
         // target lies within the sorted left half
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } 
        // otherwise, right half must be sorted
        else {
            if (target > arr[m] && target <= arr[r]) {
        // target lies within the sorted right half
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};

console.log(search([4,5,7,-1,0,1,2], 4)); // 0
