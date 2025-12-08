function flatten(obj, parent = "", out = {}) {
  for (let key in obj) {
    let newkey = parent ? parent + "." + key : key;
    typeof obj[key] === "object" && obj[key] !== null
      ? flatten(obj[key], newkey, out)
      : out[newkey] = obj[key];
  }
  return out;
}

console.log(flatten({ a: { b: { c: 1 } }, d: 2 }));//{ 'a.b.c': 1, d: 2 }