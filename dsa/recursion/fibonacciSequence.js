// fib(5)
//  ├── fib(4)
//  │    ├── fib(3)
//  │    │    ├── fib(2)
//  │    │    │    ├── fib(1) = 1
//  │    │    │    └── fib(0) = 0
//  │    │    └── fib(1) = 1
//  │    └── fib(2)
//  │         ├── fib(1) = 1
//  │         └── fib(0) = 0
//  └── fib(3)
//       ├── fib(2)
//       │    ├── fib(1) = 1
//       │    └── fib(0) = 0
//       └── fib(1) = 1

//fibonacci sequence is 1 1 2 3 5 8 13 21 34 55 ...

function fib(n) {
  if (n <= 1) return n;              // base case
  return fib(n - 1) + fib(n - 2);    // recursive case
}
console.log(fib(5)); // 5
