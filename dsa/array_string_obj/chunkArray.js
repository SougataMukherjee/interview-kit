const chunk=(arr,size)=>{
  let res=[];
  for(let i=0;i<arr.length;i+=size)
    res.push(arr.slice(i,i+size));
  return res;
}
console.log(chunk([1,2,3,4,5],1))//[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5],2))//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
