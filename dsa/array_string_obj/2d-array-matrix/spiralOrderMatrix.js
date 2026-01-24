//it should n*n matrix and traverse in right->bottom->left->top
/*
Matrix:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Spiral Traversal with Arrows:

→ → →
1   2   3
↑       ↓
4   5   6
↑ ← ← ← ↓
7   8   9

Order:
1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5
*/

function spiralOrder(matrix) {
    let top = 0, 
        left = 0,
        bottom = matrix.length - 1,  
        right = matrix[0].length - 1, 
        res = [];
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        } 
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        } 
        right--;
        if (top <= bottom) 
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
            
        } 
        bottom--;
        if (left <= right) 
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        } 
        left++;
    }
    return res
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) //[ 1, 2, 3, 6, 9, 8, 7, 4, 5]