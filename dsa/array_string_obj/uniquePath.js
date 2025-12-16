//in a grid m rows and n cols give all possible move topleft to bottomright corner
//  by only move right or down not left and up
// Row1: 1   1   1   1
// Row2: 1   2   3   4
// Row3: 1   3   6  10   ← Answer

function paths(m, n) {
  const grid = Array(m).fill(0).map(() => Array(n).fill(1)); // like const grid = [[1, 1, 1, 1],[1, 1, 1, 1],[1, 1, 1, 1]] for 3*4 grid

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }

  return grid[m - 1][n - 1];
}

console.log(paths(3,7)); // 28
console.log(paths(3,4)); // 10