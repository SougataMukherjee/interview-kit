/*

Initial State:

        |           |           |
       ===          |           |
      =====         |           |
     =======        |           |
    ---------    ---------    ---------
        A           B           C

Goal State:

        |           |           |
        |           |          ===
        |           |         =====
        |           |        =======
    ---------    ---------    ---------
        A           B           C
*/

//Tower of Hanoi minimum moves steps = 2ⁿ − 1 = 2^3 -1 =7
//A->C  A->B  C->B  A->C  B->A  B->C  A->C

function hanoi(n, from, to, aux) {
  if (n === 0) return;
  hanoi(n - 1, from, aux, to);
  console.log(`Move ${n} from ${from} → ${to}`);
  hanoi(n - 1, aux, to, from);
}

hanoi(3, "A", "C", "B");