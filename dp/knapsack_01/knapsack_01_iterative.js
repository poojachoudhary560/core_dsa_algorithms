function knapsackIterative(wt, val, n, W) {
  let t = Array(n + 1)
    .fill(null)
    .map(() => Array(W + 1));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < W + 1; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else if (wt[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

const wt = [1, 3, 4, 5];
const val = [1, 4, 5, 7];
const W = 7;
const n = wt.length;
const res = knapsackIterative(wt, val, n, W);
console.log(res); // 9
