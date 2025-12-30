//Intersection of Two arrays
const a = [1, 2, 1, 3, 1];
const b = [3, 1, 3, 4, 1];
let common = a.filter(x => b.includes(x));
console.log([...new Set(common)]); //[ 1, 3 ]