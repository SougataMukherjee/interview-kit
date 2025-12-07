function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

let user = { name: "Sam", age: 25 };
console.log(hasProperty(user, "name")); // true
console.log(hasProperty(user, "city")); // false

//way 2
//console.log(Object.keys(user).includes("name"));//true
//console.log(Object.keys(user).includes("city")); // false

//way 3
//console.log("name" in user); // true