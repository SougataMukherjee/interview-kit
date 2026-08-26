//Count vowels in string
let st = "javascript";
let count = 0;

for (let i = 0; i < st.length; i++) {
  let ch = st.charAt(i);
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    count++;
  }
}

console.log("Total vowels:", count);

//way 2
function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}