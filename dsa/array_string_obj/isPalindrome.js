//Check if a string is palindrome
function isPalindrome(str) {
  const s = str.toLowerCase();
  if(s === s.split("").reverse().join("")){
      return true
  }
  return false
}
console.log(isPalindrome('madam'))//true
validatePalindrome("!!!@@@###"); // true
validatePalindrome("No lemon no melon"); // true