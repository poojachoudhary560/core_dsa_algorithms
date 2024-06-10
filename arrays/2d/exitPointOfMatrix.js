// given 2 d arr of 0 and 1
// for every 0, pointer will move forward (in the diresction it started) and take a 90 deg clockwise turn at 1
// find the exit point of the matrix
// let arr = [
//     [0, 0, 1, 0],
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [1, 0, 1, 0]
// ]
// op: [1,3]

function exitPointOfMatrix(arr) {
  let dir = 0; // 0 - e, 1 - s, 2 - w, 3 - n
  let i = 0;
  let j = 0;
  while (true) {
    dir = (dir + arr[i][j]) % 4;
    if (dir === 0) {
      // east
      j++;
    } else if (dir === 1) {
      // south
      i++;
    } else if (dir === 2) {
      // west
      j--;
    } else if (dir === 3) {
      // north
      i--;
    }

    if (i < 0) {
      i++;
      break;
    } else if (j < 0) {
      j++;
      break;
    } else if (i === arr.length) {
      i--;
      break;
    } else if (j === arr[0].length) {
      j--;
      break;
    }
  }
  console.log(i, "--", j);
}

let arr = [
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
];

exitPointOfMatrix(arr);
