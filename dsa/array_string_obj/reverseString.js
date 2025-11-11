//Reverse a string
function reverseString(s) {
    let res = [];
    for (let i = s.length - 1; i >= 0; i--) {
      res.push(s[i]);
    }
    return res.join("");
    //return s.split("").reverse().join("")
    //return [...s].reverse().join("")
  }
  let s="sample";
  console.log(reverseString(s))