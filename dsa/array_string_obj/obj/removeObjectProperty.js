function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
let person = { name: "Sam", age: 25, city: "Bangalore" };
console.log(removeProperty(person, "city")); 