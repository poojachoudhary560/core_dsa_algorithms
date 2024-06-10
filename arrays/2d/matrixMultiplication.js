// multiply 2 matrix r1 * c1 with r2 * c2
// if they cannot be multiplied print Invalid input
// ip: r1 * c1 = 2 * 3
// r2 * c2 = 3 * 4
// let m1 = [[10, 0, 0], [0, 1, 20]];
// let m2 = [[10, 1, 1, 1], [20, 1, 1, 1], [3, 2, 0, 30]];

function matrixMultiplication(m1, m2) {
  let r1 = m1.length;
  let c1 = m1[0].length;
  let r2 = m2.length;
  let c2 = m2[0].length;
  if (c1 !== r2) {
    console.log("Invalid Input");
    return;
  }
  let res = Array.from(Array(r1), () => new Array(c2).fill(0));
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      for (let k = 0; k < c1; k++) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  console.log(res);
}
let m1 = [
  [10, 0, 0],
  [0, 1, 20],
];
let m2 = [
  [10, 1, 1, 1],
  [20, 1, 1, 1],
  [3, 2, 0, 30],
];
matrixMultiplication(m1, m2);
// op:
// [100, 10, 10, 10]
// [80, 41, 1, 601]
