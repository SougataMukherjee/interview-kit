//       1       
//     1 2 1     
//   1 2 3 2 1   
// 1 2 3 4 3 2 1 

for (let i = 1; i <= 4; i++) {
  let row = "";
  let k = 1;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      row += k + " ";
      if (j < 4) {
        k++;
      } else {
        k--;
      }
    } else {
      row += "  "; 
    }
  }
  console.log(row);
}