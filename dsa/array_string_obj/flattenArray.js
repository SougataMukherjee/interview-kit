//Flatten array of objects (arr.flat(Infinity))
let data=[[1,2],[3,4]];
console.log(data.reduce((a,b)=>a.concat(b),[])); // [1,2,3,4]