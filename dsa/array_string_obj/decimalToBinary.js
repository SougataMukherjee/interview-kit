function decToBin(num) {
  let bin = "";
  while (num > 0) {
    bin = (num % 2) + bin;
    num = Math.floor(num / 2);
  }
  return bin || "0";
}
console.log(decToBin(10)); // 1010
