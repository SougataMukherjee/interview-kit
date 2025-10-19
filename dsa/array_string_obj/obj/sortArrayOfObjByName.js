//Sort array of objects by name/age
let users=[{name:"Sam",age:25},{name:"Ana",age:22}];
console.log(users.sort((a,b)=>a.age-b.age));