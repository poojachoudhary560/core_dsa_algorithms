// given arr, print wave traversal
// ip:
// 11 12 13 14
// 21 22 23 24
// 31 32 33 34
//op: 11, 21, 31, 32, 22, 12, 13, 23, 33, 34, 24, 14

function waveTraversal(arr) {
  for (let j = 0; j < arr[0].length; j++) {
    let str = "";
    if (j % 2 === 0) {
      for (let i = 0; i < arr.length; i++) {
        str += arr[i][j] + " ";
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        str += arr[i][j] + " ";
      }
    }
    console.log(str);
  }
}

let ar = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
];
waveTraversal(ar);
