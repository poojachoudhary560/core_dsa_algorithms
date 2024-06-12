// optimal binary search tree
// given number of nodes, how many trees are possible
// catalan(n)
// given nodes of binary tree and arr of count times they are accessed / searched
// we have to find the min cost of access each node in tree

// let ar = [10, 20, 30];
// let as = [2, 3, 4];

function optimalBinarySearchTree(keys, freq, n) {
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n));
  for (let gap = 0; gap < n; gap++) {
    for (let i = 0, j = gap; j < n; i++, j++) {
      if (gap === 0) {
        dp[i][j] = freq[i];
      } else if (gap === 1) {
        let f1 = freq[i];
        let f2 = freq[j];
        dp[i][j] = Math.min(f1 + 2 * f2, f2 + 2 * f1);
      } else {
        let min = Infinity;
        let fs = 0;
        for (let x = i; x <= j; x++) {
          fs += freq[x];
        }
        for (let k = i; k <= j; k++) {
          let left = k === i ? 0 : dp[i][k - 1];
          let right = k === j ? 0 : dp[k + 1][j];
          if (left + right + fs < min) {
            min = left + right + fs;
          }
        }
        dp[i][j] = min;
      }
    }
  }
  console.log(dp[0][n - 1]);
}

let ar = [10, 20, 30];
let as = [2, 3, 4];
optimalBinarySearchTree(ar, as, ar.length);
