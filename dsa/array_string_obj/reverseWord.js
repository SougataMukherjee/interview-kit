//Reverse words in a sentence
function reverseWord(str){
    let rev=""
    let words = str.split("");
    for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === "") {
    continue;
    }
  rev += words[i];
}
return rev
}

console.log(reverseWord("hello world"));