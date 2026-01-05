//All substrings of a string
let str="abc";
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
         console.log(str.slice(i,j));
    }
}
// "a","ab","abc","b","bc","c"

const str1="HELLO"
for (let i = 0; i < str1.length; i++) {
  let part = str1.slice(0, i + 1); // take from 0 to i+1
  console.log(part);
}
// output: gradually builds substrings "H", "HE", "HEL", "HELL", "HELLO"

//print all pairs in an array
let arr=[1,2,3];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
         console.log(arr[i], arr[j]);
    }
}
// 1 2   1 3   2 3