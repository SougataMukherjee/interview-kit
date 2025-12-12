function longestCommonPrefix(str) {
  str.sort();
  let str1=str[0];
  let str2=str[str.length-1];
  let index=0;
  while(index<str1.length){
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