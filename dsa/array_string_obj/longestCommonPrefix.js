/* Dry Run:
    str = ["flight", "flow", "flower"]
    str1 = "flight", str2 = "flower"
    index=0: 'f' === 'f' -> index=1
    index=1: 'l' === 'l' -> index=2
    index=2: 'i' !== 'o' -> break
    Result = str1.substring(0,2) = "fl"
  */
function longestCommonPrefix(str) {
  str.sort();
  let str1=str[0];
  let str2=str[str.length-1];
  let index=0;
  while(index<str1.length){
    // Checking are both strings the same at this position else do not match and stop
      if(str1.charAt(index)===str2.charAt(index)){
          index++;
      }else{
          break;
      }
  }
  return str1.substring(0,index)
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["club", "clap", "clove"])); // "cl"
console.log(longestCommonPrefix(["dog", "racer", "cow"])); // ""