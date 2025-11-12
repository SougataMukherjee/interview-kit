//Flatten array of objects (arr.flat(Infinity))
let data=[[1,2],[3,4]];
function flatten(arr){
    return arr.reduce((acc,val)=>{
        if(Array.isArray(val)){
            return acc.concat(flatten(val))
        }else{
            return acc.concat(val)
        }
    },[])
}
console.log(flatten([[1,2],[3,[4]]]))