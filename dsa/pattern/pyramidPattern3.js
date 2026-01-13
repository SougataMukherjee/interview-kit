//j=  1 2 3 4
//i=1 *   
//i=2 * *  
//i=3 * * * 
//i=4 * * * *
//i=5 * * * 
//i=6 * *  
//i=7 *

// step 1: loop trace             
// i = 1 → j = 1                      
// i = 2 → j = 1 2 
// i = 3 → j = 1 2 3
// i = 4 → j = 1 2 3 4 
// i = 5 → j = 1 2 3 
// i = 6 → j = 1 2  
// i = 7 → j = 1 

//step 2: make condition
// i = 1 → j <= 1  k = 1
// i = 2 → j <= 2  k = 2
// i = 3 → j <= 3  k = 3
// i = 4 → j <= 4  k = 4
// i = 5 → j <= 3  k = 3
// i = 5 → j <= 2  k = 2
// i = 5 → j <= 1  k = 1

//step 3: formula derived
// j<=k

let k=0
for(let i=1;i<=7;i++){
    let row = "";
    i<=4?k++:k--;
    for(let j=1;j<=4;j++){
        if(j<=k)
            row += "*";
        else
            row += " ";
    }
    console.log(row)
}

//    *
//   **
//  ***
// ****
//  ***
//   **
//    *
//only change condition if(j>=5-k)
