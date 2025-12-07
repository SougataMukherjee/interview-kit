const url = new URL("https://exp.com/products?id=123&ref=abc");

console.log(url.hostname);               // exp.com
console.log(url.pathname);               // /products
console.log(url.searchParams.get("id")); // 123
