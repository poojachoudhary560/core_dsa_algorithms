function perfectSquares(n) {
  let dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      let rem = i - j * j;
      if (dp[rem] < min) {
        min = dp[rem];
      }
    }
    dp[i] = min + 1;
  }
  return dp[n];
}
