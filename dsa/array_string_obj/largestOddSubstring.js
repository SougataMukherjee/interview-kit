function findLargestOddSubstring(num) {
    let i;

    // Traverse from end to find the last odd digit
    for (i = num.length - 1; i >= 0; i--) {
        if ((num[i] - '0') % 2 != 0) {
            break;
        }
    }

    if (i == -1) {
        return -1;
    } else {
        return num.substr(0, i + 1);
    }
}
console.log(findLargestOddSubstring('128764'))//1287
console.log(findLargestOddSubstring('60042'))//-1