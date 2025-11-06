export async function getProducts(limit = 10, skip = 0) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  return data.products;
}