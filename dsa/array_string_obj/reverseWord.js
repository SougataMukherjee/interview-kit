function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world")); // "world hello"
//if you want output "dlrow olleh" then return str.split("").reverse().join("");