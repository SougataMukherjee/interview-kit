function isPowerOfTwo(n) {
    if(n<=1)return n===1
    return n%2===0 && isPowerOfTwo(n/2)
}
console.log(isPowerOfTwo(4))//true
console.log(isPowerOfTwo(9))//false
// alternative use return ((n&n-1)===0)