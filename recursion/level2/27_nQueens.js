// nqueens
// n*n chessboard
// place n queens such that no queen can kill another queen
// - * - -
// - - - *
// * - - -
// - - * -

//OR

// - - * -
// * - - -
// - - - *
// - * - -

// op: 01-13-20-32
// 02-10-23-31

function nQueens(arr) {
  helper(arr, "", 0);
}

function helper(arr, queenSoFar, row) {
  if (row === arr.length) {
    console.log(queenSoFar);
    return;
  }
  for (let col = 0; col < arr[0].length; col++) {
    if (isSafePlace(arr, row, col) === true) {
      arr[row][col] = 1;
      helper(arr, queenSoFar + row + "-" + col + ", ", row + 1);
      arr[row][col] = 0;
    }
  }
}

function isSafePlace(arr, row, col) {
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (arr[i][j] === 1) {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (arr[i][j] === 1) {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < arr.length; i--, j++) {
    if (arr[i][j] === 1) {
      return false;
    }
  }

  return true;
}

let ar = Array(4)
  .fill(null)
  .map(() => Array(4).fill(null));
nQueens(ar);
