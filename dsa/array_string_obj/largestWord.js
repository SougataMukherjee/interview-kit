//Find largest word in sentence
let str="Frontend Developer Interview";
console.log(str.split(" ").reduce((a,b)=>a.length>b.length?a:b)); // "Developer"