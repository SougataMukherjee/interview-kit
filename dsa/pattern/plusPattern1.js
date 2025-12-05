//   *  
//   *  
// *****
//   *  
//   *  

const n=5;
const mid=Math.floor(n/2)+1;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<=n;j++){
        if(i==mid||j==mid)
            row += "*";
        else
            row+=" "
    }
    console.log(row)
}