function isPowerOfTwo(n) {
  if((n&n-1)===0){
      return true
  }
  return false
}
console.log(isPowerOfTwo(4))//true