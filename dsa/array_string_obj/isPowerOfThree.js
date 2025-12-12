function isPowerOfThree(n) {
    if(n<=1)return n===1
    return n%3===0 && isPowerOfThree(n/3)
}
console.log(isPowerOfThree(4))//false
console.log(isPowerOfThree(9))//true