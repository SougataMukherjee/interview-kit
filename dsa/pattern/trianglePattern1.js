// j=    1 2 3 4 5
// i=1   *    
// i=2   * *   
// i=3   * * *  
// i=4   * * * * 
// i=5   * * * * * 

// step 1: loop trace             
// i = 1 → j = 1                      
// i = 2 → j = 1 2 
// i = 3 → j = 1 2 3
// i = 4 → j = 1 2 3 4 
// i = 5 → j = 1 2 3 4 5

//step 2: make condition
// i = 1 → j <= 1
// i = 2 → j <= 2
// i = 3 → j <= 3
// i = 4 → j <= 4
// i = 5 → j <= 5

//step 3: formula derived
// j<=i

const n=5;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<=n;j++){
        if(j<=i)
            row += "*";
        else
            row += " ";
    }
    console.log(row)
}



//     *
//    **
//   ***
//  ****
// *****
// only change if(j>n-i)



// *****
//  ****
//   ***
//    **
//     *
// only change if(j>=i)



// **** 
// ***  
// **   
// * 
// only change if(j<=n-i)

