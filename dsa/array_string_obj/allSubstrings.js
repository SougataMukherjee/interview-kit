//All substrings of a string
let str="abc";
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
         console.log(str.slice(i,j));
    }
}
// "a","ab","abc","b","bc","c"