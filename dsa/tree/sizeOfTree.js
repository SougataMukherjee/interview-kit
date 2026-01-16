/*
Size of Tree

          1
        /   \
       2     3
      / \
     4   5

Size Calculation:
size(1)
= 1 + size(2) + size(3)
= 1 + (1 + size(4) + size(5)) + 1
= 1 + (1 + 1 + 1) + 1
= 5
*/

function sizeOfTree(root){
    if(root===null) return 0;
    return 1 + sizeOfTree(root.left) + sizeOfTree(root.right)
}
/*
                [ ROOT ]
                   O
                  / \
                 /   \
        ┌────────┘     └────────┐
        │                        │
   ┌───────────────┐     ┌───────────────┐
   │   root.left   │     │  root.right   │
   │               │     │               │
   │       O       │     │       O       │
   │      / \      │     │      / \      │
   │     O   O     │     │     O   O     │
   │               │     │               │
   └───────────────┘     └───────────────┘

Recursive View:
- root is processed first
- then root.left subtree
- then root.right subtree
*/
