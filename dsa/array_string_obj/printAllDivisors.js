let n = 36;
let res = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) res.push(i);
}
console.log(res); // [1,2,3,4,6,9,12,18,36]