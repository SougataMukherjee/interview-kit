/*--------------------------------
DRY RUN
--------------------------------

Input:
arr = [1, 2, 3, 4, 5]
size = 2

Initialize:
res = []

Loop starts:
i = 0 (0 < 5 → true)

Iteration 1:
slice from index 0 to 2 (2 not included)
arr.slice(0, 2) → [1, 2]
res = [[1, 2]]

i = i + size → i = 2

--------------------------------

Iteration 2:
i = 2 (2 < 5 → true)

slice from index 2 to 4
arr.slice(2, 4) → [3, 4]
res = [[1, 2], [3, 4]]

i = i + size → i = 4

--------------------------------

Iteration 3:
i = 4 (4 < 5 → true)

slice from index 4 to 6
arr.slice(4, 6) → [5]
res = [[1, 2], [3, 4], [5]]

i = i + size → i = 6

--------------------------------

Loop ends:
i = 6 (6 < 5 → false)

Return result:
[[1, 2], [3, 4], [5]]

--------------------------------
OUTPUT:
[[1, 2], [3, 4], [5]]
--------------------------------
*/

const chunk=(arr,size)=>{
  let res=[];
  for(let i=0;i<arr.length;i+=size)
    res.push(arr.slice(i,i+size));
  return res;
}
console.log(chunk([1,2,3,4,5],1))//[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5],2))//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
