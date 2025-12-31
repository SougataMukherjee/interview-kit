const str="abc";
let res=[""];
for(const ch of str){
    const add=res.map(s=>s+ch)
    res=res.concat(add);
}
console.log(res);//['','a','b','ab','c','ac','bc''abc']