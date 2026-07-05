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


const createCalculator = (state="value") => {
  const format = (num) => {
    if (num === undefined || num === null || typeof num !== 'number') {
		return '';
	 }
	 let rounded = Number(num).toFixed(4);
	 if (Number.isInteger(num)) {
		return Number(rounded).toFixed(1);
	 } else {
		return parseFloat(rounded).toString();
	 }
  };

  return {
    ...state,
    basic: {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => b ? a / b : 'Error'
    }
  };
};


const calculator = createCalculator();
const { basic } = calculator;
console.log(basic.add(100, 100));     // "200"
console.log(basic.multiply(5, 40));   // "200"
console.log(basic.divide(1, 3));      // "0.3333333333333333"