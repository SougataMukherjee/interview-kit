let arr1=[1,2,3],arr2=[4,5,6];
console.log([...arr1,...arr2])//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr1.concat(arr2))//[ 1, 2, 3, 4, 5, 6 ]
console.log([arr1,arr2].flat(Infinity))//[ 1, 2, 3, 4, 5, 6 ]
console.log([arr1,arr2].reduce((acc,cur)=>acc.concat(cur),[]))//[ 1, 2, 3, 4, 5, 6 ]