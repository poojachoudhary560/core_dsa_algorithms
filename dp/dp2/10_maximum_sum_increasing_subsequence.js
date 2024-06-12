function maximumSumIncreasingSubsequence(arr) {
  let overallMax = -Infinity;
  let dp = Array(arr.length);
  for (let i = 0; i < dp.length; i++) {
    let max = null;
    for (let j = 0; j < i; j++) {
      if (arr[j] <= arr[i]) {
        if (max === null) {
          max = dp[j];
        } else if (dp[j] > max) {
          max = dp[j];
        }
      }
    }
    if (max === null) {
      dp[i] = arr[i];
    } else {
      dp[i] = max + arr[i];
    }
    if (dp[i] > overallMax) {
      overallMax = dp[i];
    }
  }
  console.log(overallMax);
}

let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]; // 255
maximumSumIncreasingSubsequence(arr);
