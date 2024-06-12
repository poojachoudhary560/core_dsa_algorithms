class Pair {
  constructor(i, j, psf) {
    this.i = i;
    this.j = j;
    this.psf = psf;
  }
}

function pathsOf01Knapsack(wt, val, capacity) {
  let dp = Array(wt.length + 1)
    .fill(null)
    .map(() => Array(capacity + 1).fill(0));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= wt[i - 1]) {
        if (dp[i - 1][j - wt[i - 1]] + val[i - 1] > dp[i - 1][j]) {
          dp[i][j] = dp[i - 1][j - wt[i - 1]] + val[i - 1];
        }
      }
    }
  }
  let ans = dp[val.length][capacity];
  console.log(ans);

  let queue = [];
  let newPair = new Pair(wt.length, capacity, "");
  queue.push(newPair);

  while (queue.length > 0) {
    let rem = queue.pop();
    if (rem.i === 0 || rem.j === 0) {
      console.log(rem.psf);
    } else {
      let exclude = dp[rem.i - 1][rem.j];
      if (rem.j >= wt[rem.i - 1]) {
        let include = dp[rem.i - 1][rem.j - wt[rem.i - 1]] + val[rem.i - 1];
        if (dp[rem.i][rem.j] === include) {
          let includeNode = new Pair(
            rem.i - 1,
            rem.j - wt[rem.i - 1],
            rem.i - 1 + " " + rem.psf
          );
          queue.push(includeNode);
        }
      }

      if (dp[rem.i][rem.j] === exclude) {
        let excludeNode = new Pair(rem.i - 1, rem.j, rem.psf);
        queue.push(excludeNode);
      }
    }
  }
}

let wt = [2, 5, 1, 3, 4];
let val = [15, 14, 10, 45, 30];
let capacity = 7;
pathsOf01Knapsack(wt, val, capacity);
