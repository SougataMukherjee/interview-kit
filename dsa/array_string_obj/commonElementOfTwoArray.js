let a = [1,2,3,4];
let b = [3,4,5];
let common = a.filter(x => b.includes(x));
console.log(common); // [3,4]