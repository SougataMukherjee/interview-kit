let arr=[4,1,8,2];
console.log(arr.sort((a,b)=>a-b)); // [1,2,4,8]

//way 2
 function customSort(arr) {
    let str=[],num=[];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            str.push(arr[i])
        }else{
            num.push(arr[i])
        }
    }
    str.sort();
    num.sort((a,b)=>a-b)
    return [...str,...num];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));