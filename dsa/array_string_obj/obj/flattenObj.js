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

console.log(flatten({ a: { b: { c: 1 } }, d: 2 }));//{ 'a.b.c': 1, d: 2 }