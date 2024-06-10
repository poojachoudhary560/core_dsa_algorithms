// given a 2d matrix rotate it by 90 degrees
// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// op
// [13, 9, 5, 1][14, 10, 6, 2][15, 11, 7, 3][16, 12, 8, 4]

// matrix transpose changes first row in first column
// rotate by 90 deg makes first row to last column
function rotateBy90(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[0].length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let low = 0;
    let high = arr[i].length - 1;
    while (low < high) {
      let temp = arr[i][low];
      arr[i][low] = arr[i][high];
      arr[i][high] = temp;
      low++;
      high--;
    }
  }
  console.log(arr);
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
rotateBy90(arr);
