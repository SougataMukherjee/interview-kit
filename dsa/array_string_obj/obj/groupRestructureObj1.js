const arr = [
  { name: "A", value: 20 ,email: "a@mail.com", dept: "IT", salary: 100},
  { name: "B", value: 25 ,email: "b@mail.com", dept: "HR",salary: 200},
  { name: "C", value: 35 ,email: "a@mail.com", dept: "IT",salary: 300},
  { name: "D", value: 40 ,email: "a@mail.com", dept: "HR",salary: 400}
];

const output = {};
const high = [];
const low = [];

arr.forEach((item) => {
  const { name, dept, salary, email } = item
  let key = item.name ?? 'Unknown' // item.dept

 if (!output[key]) {
    output[key] = [];
  }
 //   output[key].push(item);
 // if (!output[dept]) output[dept] = new Set();
 //  output[dept].add(name);
 
 // ---- duplicate email remove----
 //   output[email] = item;
  // ---- Count Salary ----
  //if (!output[name]) output[name] = 0;
 // output[name] += salary;//{ A: 100, B: 200, C: 300, D: 400 }

 // ---- Group by dept → names ----
  if (!output[dept]) output[dept] = [];
  output[dept].push(name);

  // ---- Salary split ----
  if (salary >= 300) high.push(item);
  else low.push(item)

});
console.log(output)
// const group=Object.groupBy(arr,(user)=>user.name)
// console.log(group);
// console.log(arr.sort((a, b) => b.salary - a.salary))