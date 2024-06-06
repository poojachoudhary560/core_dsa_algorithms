// sudoku

function sudoku(arr) {
  solveSudoku(arr, 0, 0);
  // console.log(arr);
}

function solveSudoku(arr, i, j) {
  if (i === arr.length) {
    for (let row of arr) {
      console.log(JSON.stringify(row));
    }
    return;
  }
  let nextI = 0;
  let nextJ = 0;
  if (j === arr[0].length - 1) {
    nextI = i + 1;
    nextJ = 0;
  } else {
    nextI = i;
    nextJ = j + 1;
  }

  if (arr[i][j] != 0) {
    solveSudoku(arr, nextI, nextJ);
  } else {
    for (let possibleOption = 1; possibleOption <= 9; possibleOption++) {
      if (isValid(arr, i, j, possibleOption) === true) {
        arr[i][j] = possibleOption;
        solveSudoku(arr, nextI, nextJ);
        arr[i][j] = 0;
      }
    }
  }
}

function isValid(arr, x, y, val) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[x][j] === val) {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][y] === val) {
      return false;
    }
  }

  let subMatrixI = Math.floor(x / 3) * 3;
  let subMatrixJ = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[subMatrixI + i][subMatrixJ + j] === val) {
        return false;
      }
    }
  }
  return true;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 8, 0, 0, 0, 7, 0, 9, 0],
  [6, 0, 2, 0, 0, 0, 5, 0, 0],
  [0, 7, 0, 0, 6, 0, 0, 0, 0],
  [0, 0, 0, 9, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 4, 0],
  [0, 0, 5, 0, 0, 0, 6, 0, 3],
  [0, 9, 0, 4, 0, 0, 0, 7, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0],
];

sudoku(arr);

// [9,5,7,6,1,3,2,8,4]
// [4,8,3,2,5,7,1,9,6]
// [6,1,2,8,4,9,5,3,7]
// [1,7,8,3,6,4,9,5,2]
// [5,2,4,9,7,1,3,6,8]
// [3,6,9,5,2,8,7,4,1]
// [8,4,5,7,9,2,6,1,3]
// [2,9,1,4,3,6,8,7,5]
// [7,3,6,1,8,5,4,2,9]
