// flood fill
// one can go right, left top or down
// print all paths from 0,0 to m,n
// matrix of m rows and n colums
// all blocks with 1 in matrix are blockers

function floodFill(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let visited = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
  helper(arr, 0, 0, "", visited);
}

function helper(arr, row, col, pathSoFar, visited) {
  if (
    row < 0 ||
    col < 0 ||
    row === arr.length ||
    col === arr[0].length ||
    arr[row][col] === 1 ||
    visited[row][col]
  )
    return;
  if (row === arr.length - 1 && col === arr[0].length - 1) {
    console.log(pathSoFar);
    return;
  }
  visited[row][col] = true;
  helper(arr, row - 1, col, pathSoFar + "t", visited);
  helper(arr, row, col - 1, pathSoFar + "l", visited);
  helper(arr, row + 1, col, pathSoFar + "d", visited);
  helper(arr, row, col + 1, pathSoFar + "r", visited);
  visited[row][col] = false;
}

let arr = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 0, 0],
  [0, 1, 0],
];

floodFill(arr);
