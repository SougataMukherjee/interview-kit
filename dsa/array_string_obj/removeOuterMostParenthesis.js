function removeOuter(s) {
  let result = "";
  let count = 0;

  for (let ch of s) {
    //whenever opening bracket increase counter by 1
    if (ch === '(') {
      if (count > 0) result += ch;
      count++;
    } else {
    //whenever closing bracket decrease counter by 1
      count--;
      if (count > 0) result += ch;
    }
  }
  return result;
}
console.log(removeOuter("(()())")); // ()()