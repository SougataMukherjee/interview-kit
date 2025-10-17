//Remove all white spaces(str.replace(/\s+/g,""))
let str = " a b c ";
let tempStr = "";

for (let i = 0; i < str.length; ) {
  if (str[i] === " ") {
    i++;
  } else {
    tempStr += str[i];
    i++;
  }
}

console.log(tempStr);