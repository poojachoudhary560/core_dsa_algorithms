// arr:           [2, 8, -3, -5, 2, -4, 6, 1, 2, 1, -3, 4]
// prefix sum  0   2  10  7   2  4   0  6  7  9  10  7  11
// freq        1   1  1   1   2  1   2  1  2  1  2   3  1
// ans: 1 + 1 + 1 + 1 + 2

function countOfZeroSumSubarray(arr) {
  let ans = 0;
  let sum = 0;
  let freqMap = {
    0: 1,
  };
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (freqMap[sum] === undefined) {
      freqMap[sum] = 1;
    } else {
      ans += freqMap[sum];
      freqMap[sum] += 1;
    }
  }
  return ans;
}

let ar = [2, 8, -3, -5, 2, -4, 6, 1, 2, 1, -3, 4];
let ans = countOfZeroSumSubarray(ar);
console.log("ans", ans);
