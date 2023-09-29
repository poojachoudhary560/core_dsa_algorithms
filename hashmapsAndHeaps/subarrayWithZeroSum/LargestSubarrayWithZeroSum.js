//   [2, 8, -3, -5, 2, -4, 6, 1, 2, 1, -3, 4]
// 0  2  10  7   2  4   0  6  7  9  10  7  11
//-1  0  1   2      4      6     8         11

function largestSubarrayWithZeroSum(arr) {
  let ans = 0;
  let sum = 0;
  // sum-occurence map value:index
  let map = {
    0: -1,
  };
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map[sum] === undefined) {
      map[sum] = i;
    } else {
      let len = i - map[sum];
      if (len > ans) {
        ans = len;
      }
    }
  }
  return ans;
}

let ar = [2, 8, -3, -5, 2, -4, 6, 1, 2, 1, -3, 4];
let ans = largestSubarrayWithZeroSum(ar);
console.log("ans", ans);
