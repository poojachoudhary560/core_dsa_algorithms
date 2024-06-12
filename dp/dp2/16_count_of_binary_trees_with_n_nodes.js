// given count of nodes
// let arr = [10, 20, 30]
// how many bst's can we create?
// 10                      10                     20                   30              30
//   \                       \                    / \                  /               /
//    20                      30                 10  30              20               10
//     \                      /                                      /                 \
//      30                   20                                     10                  20

function countNumberOfBinarySearchTresswithNNodes(n) {
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let l = 0;
    let r = i - 1;
    while (l <= i - 1) {
      dp[i] += dp[l] * dp[r];
      l++;
      r--;
    }
  }
  console.log(dp[n]);
}

countNumberOfBinarySearchTresswithNNodes(3); //5
countNumberOfBinarySearchTresswithNNodes(4); //14
