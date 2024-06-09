function printMazePathwithJumps(row, col, m, n) {
  helper(row, col, m, n, "");
}

function helper(row, col, m, n, path) {
  if (row === m && col === n) {
    console.log(path);
    return;
  }

  // col
  for (let moveSize = 1; moveSize <= n - col; moveSize++) {
    helper(row, col + moveSize, m, n, path + "h" + moveSize);
  }

  for (let moveSize = 1; moveSize <= m - row; moveSize++) {
    helper(row + moveSize, col, m, n, path + "v" + moveSize);
  }

  for (
    let moveSize = 1;
    moveSize <= m - row && moveSize <= n - col;
    moveSize++
  ) {
    helper(row + moveSize, col + moveSize, m, n, path + "d" + moveSize);
  }
}

printMazePathwithJumps(1, 1, 3, 3);
