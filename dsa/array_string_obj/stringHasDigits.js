//Check if string has only digits
let str = "12345";
let isDigitOnly = true;

for (let ch of str) {
  if (ch < '0' || ch > '9') {
    isDigitOnly = false;
    break;
  }
}

console.log(isDigitOnly);