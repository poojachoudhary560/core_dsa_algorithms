function lcsLength(x, y, m, n) {
  let t = Array(m + 1)
    .fill(-1)
    .map(() => Array(n + 1));
  for (let i = 0; i < m + 1; i++) {
    for (j = 0; j < n + 1; j++) {
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

function minNoOfInsertionDeletion(x, y) {
  let lcsRes = lcsLength(x, y, x.length, y.length);
  let insertion = y.length - lcsRes;
  let deletion = x.length - lcsRes;
  return [insertion, deletion]; // 1,2
}

let a = "heap";
let b = "pea";
let res = minNoOfInsertionDeletion(a, b);
console.log(res);
