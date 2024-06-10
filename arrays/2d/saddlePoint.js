function saddlePoint(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestJ = 0;
    for (let j = 1; j < arr[0].length; j++) {
      if (arr[i][j] < arr[i][smallestJ]) {
        smallestJ = j;
      }
    }

    let flag = true;
    for (let k = 0; k < arr.length; k++) {
      if (arr[i][smallestJ] < arr[k][smallestJ]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      console.log(arr[i][smallestJ]);
      return;
    }
  }
  console.log("invalid ip");
}

let ar = [
  [11, 12, 13, 15, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45],
];
saddlePoint(ar); // 41
