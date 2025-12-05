// * * * * * 
// * * * * 
// * * * 
// * * 
// *

const n=5;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<=n+1-i;j++){
        row += "* ";
    }
    console.log(row)    
}