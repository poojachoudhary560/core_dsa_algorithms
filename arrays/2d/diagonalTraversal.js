function diagonalTraversal(arr) {
  for (let gap = 0; gap < arr.length; gap++) {
    for (let i = 0, j = gap; j < arr.length; i++, j++) {
      console.log(arr[i][j]);
    }
    console.log("----------");
  }
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

diagonalTraversal(arr);

function diagonalTraversalLowerHalf(arr) {
  for (let gap = 0; gap < arr.length; gap++) {
    for (let i = gap, j = 0; i < arr.length; i++, j++) {
      console.log(arr[i][j]);
    }
    console.log("----------");
  }
}

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

diagonalTraversalLowerHalf(arr);
