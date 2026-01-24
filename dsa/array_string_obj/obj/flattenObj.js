function flatten(obj, parent = "", out = {}) {
  for (let key in obj) {
    let newkey = parent ? parent + "." + key : key;
    let val = obj[key];
    typeof val === "object" && val !== null
      ? flatten(val, newkey, out)
      : out[newkey] = val;
  }
  return out;
}

console.log(flatten({ a: { b: { c: 1 } }, d: 2 })); //{ 'a.b.c': 1, d: 2 }
console.log(flatten({ a: "12", b: 23, c:{ d:20 , e:{ f:30 }, g:[2,4] } }));//{ a: '12', b: 23, 'c.d': 20, 'c.e.f': 30, 'c.g.0': 2, 'c.g.1': 4 }