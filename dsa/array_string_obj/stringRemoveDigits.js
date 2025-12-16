const str="a1b2c3";
let result="";

for(let ch of str){
    if(ch<"0"||ch>"9"){
        result+=ch
    }
}
console.log(result)//abc