let payload = {
  name: "sam coding",
  obj2: {
    language: "js",
    obj3: {
      framework: "react",
    },
  },
};

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
    if (typeof obj[key] === "object") {
      getKeys(obj[key]);
    }
  }
}

getKeys(payload);