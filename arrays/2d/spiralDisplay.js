// spiral display
// ip:
// let ar = [
//     [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35]
// ];

// op: 11 21 31 32 33 34 35 25 15 14 13 12 22 23 24

function spiralDisplay(arr) {
  let minr = 0;
  let minc = 0;
  let maxr = arr.length - 1;
  let maxc = arr[0].length - 1;
  let totalElements = arr.length * arr[0].length;
  console.log("totalElements", totalElements);
  let count = 0;
  while (count < totalElements) {
    // left wall
    for (let i = minr, j = minc; i <= maxr && count < totalElements; i++) {
      console.log(arr[i][j]);
      count++;
    }
    minc++;
    // bottom wall
    for (let i = maxr, j = minc; j <= maxc && count < totalElements; j++) {
      console.log(arr[i][j]);
      count++;
    }
    maxr--;

    // right wall
    for (let i = maxr, j = maxc; i >= minr && count < totalElements; i--) {
      console.log(arr[i][j]);
      count++;
    }
    maxc--;

    // top wall
    for (let i = minr, j = maxc; j >= minc && count < totalElements; j--) {
      console.log(arr[i][j]);
      count++;
    }
    minr++;
  }
}

let ar = [
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
];

spiralDisplay(ar);
