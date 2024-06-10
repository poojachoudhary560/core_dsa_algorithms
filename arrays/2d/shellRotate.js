// shell rotate
// arr shells
// rotate the shell provided in question by no of positions in anticlockwise direction

// let arr = [
//     [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35],
//     [41, 42, 43, 44, 45],
//     [51, 52, 53, 54, 55],
//     [61, 62, 63, 64, 65],
// ]
// let shell = 2
// let rotate = 1
function shellRotate(arr, shell, rotateBy) {
  let oneDArray = fillOneDFromShell(arr, shell);
  console.log("oneDArray", oneDArray);
  // rotate(oneDArray, rotateBy);
  // fillShellFromOneDArray(arr, oneDArray, shell);
}

function rotate(oneDArray, rotate) {
  rotate = rotate % oneDArray.length;
  if (rotate < 0) {
    rotate = rotate + oneDArray.length;
  }
  reverse(oneDArray, 0, oneDArray.length - rotate - 1);
  reverse(oneDArray, oneDArray.length - rotate, oneDArray.length - 1);
  reverse(oneDArray, 0, oneDArray.length - 1);
}

function reverse(oneDArray, low, high) {
  while (low < high) {
    let temp = oneDArray[low];
    oneDArray[low] = oneDArray[high];
    oneDArray[high] = temp;
    low++;
    high--;
  }
}
function fillShellFromOneDArray(arr, oneDArray, shell) {
  let minr = shell - 1;
  let minc = shell - 1;
  let maxr = arr.length - shell;
  let maxc = arr[0].length - shell;
  let idx = 0;
  // lw
  for (let i = minr, j = minc; i <= maxr; i++) {
    arr[i][j] = oneDArray[idx];
    idx++;
  }
  minc++;

  // bw
  for (let i = maxr, j = minc; j <= maxc; j++) {
    arr[i][j] = oneDArray[idx];
    idx++;
  }
  maxr--;

  // rw
  for (let i = maxr, j = maxc; i >= minr; i--) {
    arr[i][j] = oneDArray[idx];
    idx++;
  }
  maxc--;

  // tw
  for (let i = minr, j = maxc; j >= minc; j--) {
    arr[i][j] = oneDArray[idx];
    idx++;
  }
}
function fillOneDFromShell(arr, shell) {
  let minr = shell - 1;
  let minc = shell - 1;
  let maxr = arr.length - shell;
  let maxc = arr[0].length - shell;
  // leftWall + bottomWall + rightWall + topWall - 4
  // (2 * leftWall) + (2 * bottomWall) + 4
  let size = 2 * (maxr - minr + 1) + 2 * (maxc - minc + 1) - 4;
  let oneDArray = Array(size);
  // lw
  let idx = 0;
  for (let i = minr, j = minc; i <= maxr; i++) {
    oneDArray[idx] = arr[i][j];
    idx++;
  }
  minc++;
  // bw
  for (let j = minc, i = maxr; j <= maxc; j++) {
    oneDArray[idx] = arr[i][j];
    idx++;
  }
  maxr--;

  //rw
  for (let i = maxr, j = maxc; i >= minr; i--) {
    oneDArray[idx] = arr[i][j];
    idx++;
  }
  maxc--;

  // tw
  for (let i = minr, j = maxc; j >= minc; j--) {
    oneDArray[idx] = arr[i][j];
    idx++;
  }
  return oneDArray;
}

let arr = [
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45],
  [51, 52, 53, 54, 55],
  [61, 62, 63, 64, 65],
];

let shell = 2;
let rotateBy = 1;
shellRotate(arr, shell, rotateBy);
