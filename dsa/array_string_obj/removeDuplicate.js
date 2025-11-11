//Remove duplicate characters
let str = "banana";
let unique = [...new Set(str)].join("");
console.log(unique); // "ban"
//Remove duplicates from array and merge
let arr = [1,2,2,3,4,4],arr2=[4,5,5]
console.log([...new Set([...arr,...arr2])]); // [1,2,3,4]

let remove=arr.filter((value,index)=>arr.indexOf((value)===index))

let f=["mango","banana","banana"]
let rd=f.reduce((prev,curr)=>{
    if(prev.indexOf(curr)===-1){
        prev.push(curr)
    }
    return prev
},[])
console.log(rd)//[ 'mango', 'banana' ]