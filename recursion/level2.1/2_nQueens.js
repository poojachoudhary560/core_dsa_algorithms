// n queens
// in order to avoid queen from killing each other, we have 3 arrays
// one for row
// one for one diagonal
// one for another diagonal

// for diagnal / total diagonals = 2 *n -1
// for all row + column diagonal has same sum

// for diagonal \, you can do row - col + ar.length - 1
function nqueens(arr) {
  let cols = Array(arr[0].length);
  let diagnal = Array(2 * arr.length - 1);
  let reverseDiagonal = Array(2 * arr.length - 1);
  solve(arr, 0, cols, diagnal, reverseDiagonal, "");
}
function solve(arr, row, cols, diagnal, reverseDiagonal, ansSoFar) {
  if (row === arr.length) {
    console.log(ansSoFar + " .");
    return;
  }
  for (let col = 0; col < arr[0].length; col++) {
    if (
      !cols[col] &&
      !diagnal[row + col] &&
      !reverseDiagonal[row - col + arr.length - 1]
    ) {
      // arr[row][col] = true;
      cols[col] = true;
      diagnal[row + col] = true;
      reverseDiagonal[row - col + arr.length - 1] = true;
      solve(
        arr,
        row + 1,
        cols,
        diagnal,
        reverseDiagonal,
        ansSoFar + row + "-" + col + " "
      );
      // arr[row][col] = false;
      cols[col] = false;
      diagnal[row + col] = false;
      reverseDiagonal[row - col + arr.length - 1] = false;
    }
  }
}
let ar = Array(4)
  .fill(null)
  .map(() => Array(4).fill(0));
console.log(ar);
nqueens(ar);
// 0-1 1-3 2-0 3-2  .
// 0-2 1-0 2-3 3-1  .
