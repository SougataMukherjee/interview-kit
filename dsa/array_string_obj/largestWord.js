//Find largest word in sentence
let str="Frontend Developer Interview";
console.log(str.split(" ").reduce((a,b)=>a.length>b.length?a:b)); // "Developer"

// let sp=s.split(" ").sort((a,b)=>a.length-b.length)
// console.log(sp[sp.length-1])