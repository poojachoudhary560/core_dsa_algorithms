// given m * n matrix print maze path from 1, 1 to m, n

function printMazePaths(row, col, m, n) {
  helper(row, col, m, n, "");
}

function helper(row, col, m, n, path) {
  if (row > m || col > n) return;
  if (row === m && col === n) {
    console.log(path);
    return;
  }
  helper(row, col + 1, m, n, path + "h");
  helper(row + 1, col, m, n, path + "v");
}

printMazePaths(1, 1, 3, 3);
