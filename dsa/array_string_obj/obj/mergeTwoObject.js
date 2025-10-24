const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);//{ a: 1, b: 3, c: 4 }

//if you want to group obj
function groupObj(...obj){
    return obj
}
console.log(groupObj(a,b));//[ { a: 1, b: 2 }, { b: 3, c: 4 } ]
