//Remove duplicate characters
const str = "banana";
const unique = [...new Set(str)].join("");
console.log(unique); // "ban"
//Remove duplicates from array and merge
const arr = [1,2,2,3,4,4],arr2=[4,5,5]
console.log([...new Set([...arr,...arr2])]); // [1,2,3,4]

const arr1=["mango","banana","banana"]
const remove = arr1.filter(
  (value, index) => arr1.indexOf(value) === index
);
console.log(remove)//[ 'mango', 'banana' ]