//Find shortest word
let str="I love programming";
let words=str.split(" ");

let min = words.sort((a, b) => a.length - b.length);
console.log(min[0]); // "I"