function longestWord(str) {
  const words = str.split(" ");      // convert string to array of words
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("JavaScript is a powerful language"));
// Output: "JavaScript"
