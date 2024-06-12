// given count of up and down strokes, calculate count of valleys and mountains

function countingValleysAndMountains(n) {
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    let inside = i - 1;
    let outside = 0;
    while (inside >= 0) {
      dp[i] += dp[outside] * dp[inside];
      inside--;
      outside++;
    }
  }
  console.log(dp[n]);
}

countingValleysAndMountains(4); // 14
