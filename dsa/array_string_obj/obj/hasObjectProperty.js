function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

let user = { name: "Sam", age: 25 };
console.log(hasProperty(user, "name")); // true
console.log(hasProperty(user, "city")); // false