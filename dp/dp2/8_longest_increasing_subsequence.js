function longestIncreasingSubsequence(arr) {
  let overallMax = 0;
  let dp = Array(arr.length);
  for (let i = 0; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        if (dp[j] > max) {
          max = dp[j];
        }
      }
    }
    dp[i] = max + 1;
    if (dp[i] > overallMax) {
      overallMax = dp[i];
    }
  }
  console.log(overallMax);
}

let ar = [10, 22, 9, 33, 21, 50, 41, 60, 80, 1]; // 6
longestIncreasingSubsequence(ar);
