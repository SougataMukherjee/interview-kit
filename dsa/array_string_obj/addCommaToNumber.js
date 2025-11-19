function addCommas(n) {
  return n.toLocaleString("en-US");
}
console.log(addCommas(1000));      // 1,000
console.log(addCommas(987654321)); // 987,654,321