// longest subarrays with equal zeros and ones
// indexes    0  1  2  3  4  5  6  7  8  9 10 11 12
// let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1];
// sum:   0  -1 -2 -1 -2 -1 -2 -1  0 -1 -2 -1  0  1
//index: -1   0  1  2
// op: 12

function longestSubarrayWithEqualZerosAndOnes(arr) {
  let mapping = new Map();
  mapping.set(0, -1);
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum += -1;
    } else {
      sum += 1;
    }
    if (mapping.has(sum)) {
      let len = i - mapping.get(sum);
      if (len > ans) {
        ans = len;
      }
    } else {
      mapping.set(sum, i);
    }
  }
  return ans;
}

let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1];
let res = longestSubarrayWithEqualZerosAndOnes(arr);
console.log("res", res);
