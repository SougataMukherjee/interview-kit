const input = {
  A: (a, b) => a + b,
  B: (a, b) => a - b,
  C: (a, b) => a * b,
  D: (a, b) => a / b
};

function compute(a, b, op) {
  return input[op](a, b);
}

console.log(compute(4, 2, 'A')); // 6
console.log(compute(4, 2, 'C')); // 8
