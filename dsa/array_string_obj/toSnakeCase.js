function toSnakeCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "_";
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

console.log(toSnakeCase("HeLLo WoRld"));//hello_world
