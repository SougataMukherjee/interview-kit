function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) =>{
       // if word is fully uppercase, keep as it is
      if (word === word.toUpperCase()) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
     }).join(" ");
}
console.log(toTitleCase('hello world'));// Hello World
console.log(toTitleCase('WELCOME to the JUNGLE'))//WELCOME To The JUNGLE