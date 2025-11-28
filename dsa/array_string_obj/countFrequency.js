const arr = ["a","b","a","c","b","a"];
const out = {};

arr.forEach(x => {
  out[x] = (out[x] || 0) + 1;
});

console.log(out); // {a:3, b:2, c:1}

// if ask count word based on occurrence of str="hi hello hi bye hello hi"
// so using str.split(" ").forEach(...same)
