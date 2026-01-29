/*
  DRY RUN for decToBin(10)

  Initial:
  num = 10
  bin = ""

  ------------------------------------------------
  Iteration 1:
  num > 0  → true
  num % 2  = 10 % 2 = 0
  bin      = "0" + "" = "0"
  num      = Math.floor(10 / 2) = 5

  ------------------------------------------------
  Iteration 2:
  num > 0  → true
  num % 2  = 5 % 2 = 1
  bin      = "1" + "0" = "10"
  num      = Math.floor(5 / 2) = 2

  ------------------------------------------------
  Iteration 3:
  num > 0  → true
  num % 2  = 2 % 2 = 0
  bin      = "0" + "10" = "010"
  num      = Math.floor(2 / 2) = 1

  ------------------------------------------------
  Iteration 4:
  num > 0  → true
  num % 2  = 1 % 2 = 1
  bin      = "1" + "010" = "1010"
  num      = Math.floor(1 / 2) = 0

  ------------------------------------------------
  Loop stops because num = 0

  Final Output:
  bin = "1010"
  */
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
