function calculator(a, b, operator) {
  if(typeof a === "number"&& typeof b==="number"){
    switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "Invalid operator";
  }
  }else{
    return "unknown value"
  }
  
}
console.log(calculator(10, 5, '+'));