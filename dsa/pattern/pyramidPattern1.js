//       *       
//     * * *     
//   * * * * *   
// * * * * * * * 
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      row += "* ";
    } else {
      row += "  "; 
    }
  }
  console.log(row);
}