function compute() {
  let total = 0;

  return {
    lacs(n) { total += n * 100000; return this; },
    thousand(n) { total += n * 1000; return this; },
    hundred(n) { total += n * 100; return this; },
    value() { return total; }
  };
}

console.log(compute().lacs(2).thousand(3).hundred(5).value()); // 203500
