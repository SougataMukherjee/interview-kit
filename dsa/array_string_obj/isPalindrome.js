//Check if a string is palindrome
function isPalindrome(s) {
  if(s === s.split("").reverse().join("")){
      return true
  }
  return false
}
let s="madam";
console.log(isPalindrome(s))