const obj = {
  a: { b: { c: 5, d: 6, e: 7 }, f: 8, g: { h: 9 } },
  i: 10,
  j: 11
};

const output = [];

function traverse(curr, path) {
  for (const i in curr) {
    const res = `${path}->${i}`;
    typeof curr[i] === "object"
      ? traverse(curr[i], res)
      : output.push(res);
  }
}

traverse(obj, "obj");
console.log(output);

// [
//   'obj->a->b->c',
//   'obj->a->b->d',
//   'obj->a->b->e',
//   'obj->a->f',
//   'obj->a->g->h',
//   'obj->i',
//   'obj->j'
// ]