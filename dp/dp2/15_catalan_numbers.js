function catalanNumbers(n) {
  let dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  console.log(dp[n]);
}
