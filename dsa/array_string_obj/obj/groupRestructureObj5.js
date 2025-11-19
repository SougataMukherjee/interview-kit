const users=[
    {name:'Alice',age:21,dept:'IT'},
    {name:'Bob',age:20,dept:'HR'},
    {name:'Sam',age:21,dept:'HR'},
    {name:'Peter',age:20,dept:'IT'},
]
const group=Object.groupBy(users,(user)=>user.dept)
console.log(group);
// {
//   IT: [
//     { name: 'Alice', age: 21, dept: 'IT' },
//     { name: 'Peter', age: 20, dept: 'IT' }
//   ],
//   HR: [
//     { name: 'Bob', age: 20, dept: 'HR' },
//     { name: 'Sam', age: 21, dept: 'HR' }
//   ]
// }