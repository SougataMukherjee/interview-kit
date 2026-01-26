  //j=1  2  3  4  5  6  7
//i=1          *       
//i=2       *  *  *     
//i=3    *  *  *  *  *   
//i=4 *  *  *  *  *  *  * 

// step 1: loop trace             
// i = 1 → j =         4                      
// i = 2 → j =      3  4  5
// i = 3 → j =   2  3  4  5  6
// i = 4 → j = 1 2  3  4  5  6  7

//step 2: make condition
// i = 1 → j >= 4 && j <= 4 
// i = 2 → j >= 3 && j <= 5 
// i = 3 → j >= 2 && j <= 6
// i = 4 → j >=1  && j <= 7


//step 3: formula derived
// j<=k

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