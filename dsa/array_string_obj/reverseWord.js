function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
  // return str.split(" ").map(d => {
  //       return d.trim()?d.split('').reverse().join(''):d
  //   }).join(" ");
}

console.log(reverseWords("hello world")); // "world hello"
//if you want output "dlrow olleh" then return str.split("").reverse().join("");