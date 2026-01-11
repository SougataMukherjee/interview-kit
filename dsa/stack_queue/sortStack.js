/*
Initial State
=============

(Main Stack)            (Temp Stack)
Bottom                   Bottom
  |                        |
 [5]                      []
 [1]
 [3]
 [2]   <-- Top


--------------------------------------------------
Step 1: Pop 2 from Main → Temp is empty → push 2
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[5]                     [2]   <-- Top
[1]
[3]   <-- Top


--------------------------------------------------
Step 2: Pop 3 from Main
3 > Temp top (2) → push 3 into Temp
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[5]                     [2]
[1]                     [3]   <-- Top


--------------------------------------------------
Step 3: Pop 1 from Main
1 < Temp top (3) → pop 3 → push to Main
1 < Temp top (2) → pop 2 → push to Main
Push 1 into Temp
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[5]                     [1]   <-- Top
[3]
[2]   <-- Top


--------------------------------------------------
Step 4: Pop 2 from Main
2 > Temp top (1) → push 2 into Temp
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[5]                     [1]
[3]                     [2]   <-- Top


--------------------------------------------------
Step 5: Pop 3 from Main
3 > Temp top (2) → push 3 into Temp
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[5]                     [1]
                        [2]
                        [3]   <-- Top


--------------------------------------------------
Step 6: Pop 5 from Main
5 > Temp top (3) → push 5 into Temp
--------------------------------------------------

(Main Stack)            (Temp Stack)
-----------             -----------
[]                      [1]
                        [2]
                        [3]
                        [5]   <-- Top

*/

function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    // Pop the top element from the original stack
    const current = stack.pop();
    // Move elements from tempStack back to stack if they are greater than current
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
      stack.push(tempStack.pop());
    }
    // Push the current element into tempStack
    tempStack.push(current);
  }

  // Move all elements back to the original stack
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }
}
