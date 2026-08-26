function generateAtoZ() {
 const arr = [];
  for (let i = 97; i < 123; i++){
    arr.push(String.fromCharCode(i).toUpperCase())
  }
  return arr
}
// [
//   'A', 'B', 'C', 'D', 'E', 'F',
//   'G', 'H', 'I', 'J', 'K', 'L',
//   'M', 'N', 'O', 'P', 'Q', 'R',
//   'S', 'T', 'U', 'V', 'W', 'X',
//   'Y', 'Z'
// ]