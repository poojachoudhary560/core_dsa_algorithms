function helper(x, y, m, n, t) {
  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (x[i - 1] === y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }
  return t[m][n];
}

function lcsTopDown(x, y) {
  let t = Array(x.length + 1)
    .fill(-1)
    .map(() => Array(y.length + 1));
  return helper(x, y, x.length, y.length, t);
}

let a = "abcdgh";
let b = "abedfhr";
let res = lcsTopDown(a, b);
console.log(res);
