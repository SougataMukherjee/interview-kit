//Count words in a string
let str = "Hi ! sam. what's up?";
let words = str.split(" "); 
let count = 0;

for (let w of words) {
  if (w !== "") count++; 
}

console.log(count);