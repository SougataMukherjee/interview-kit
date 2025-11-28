const obj = Object.fromEntries("name=Sam&age=30".split("&").map(p => p.split("=")));
console.log(obj);//{ name: 'Sam', age: '30' }