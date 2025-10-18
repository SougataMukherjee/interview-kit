// *   *
//  * * 
//   *  
//  * * 
// *   *

for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=5;j++){
        if(i==j||i+j==6)
            row += "*";
        else
            row+=" "
    }
    console.log(row)
}