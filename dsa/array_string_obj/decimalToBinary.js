function decToBin(num) {
  let bin = "";
  while (num > 0) {
    //num % 2 gives remainder (0 or 1) and We add it in front of the existing binary string
    bin = (num % 2) + bin;
    num = Math.floor(num / 2);
  }
  return bin;
}
console.log(decToBin(10)); // 1010
