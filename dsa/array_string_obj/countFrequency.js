const arr = ["a","b","a","c","b","a"];
const out = {};

arr.forEach(x => {
  out[x] = (out[x] || 0) + 1;
});

console.log(out); // {a:3, b:2, c:1}
