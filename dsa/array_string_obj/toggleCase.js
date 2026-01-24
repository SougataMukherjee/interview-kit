// Sample Input abcdE 
// Sample Output Abcde

function toggle(s) {
  return [...s].map(c =>
    c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
  ).join("");
}
console.log(toggle('abcdE'));//ABCDe