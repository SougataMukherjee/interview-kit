const arr=[1,2,3,"4"]
const allSameType=arr.every(item=>typeof item==='number')
console.log(allSameType); //false