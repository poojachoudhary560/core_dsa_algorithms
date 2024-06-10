// gien an arr of integers and no k
// find length of longest subarray whose sum is divisible by k

// let arr = [2, 4, 8, 1, 7, 3, 6, 1, 9, 2, 7, 3];  // k = 5
// sum:    0  2  6  14 15 22 25 31 32 41 43 50 53
// rem:    0  2  1   4  0  2  0  1  2  1  3  0  3
// index: -1  0  1   2                    9

// s1 = km + x // s2 = kn + x
// s1 - s2 = k (m-n)
// so here we look for same remainder and the different between them (end included) will be divisible by k

// for negative remainder, we will do k + negative remainder
// 7n-5 = 7n-5+7-7 = 7(n-1)+2
// let a2 = [-3, -9, -4, 8, 5, 4, 2, 6]; // k=7
// sum:  0
// op: 6

function longestSubarrayWithSumDivisibleByK(arr, k) {
  let sum = 0;
  let ans = 0;
  let mapping = new Map();
  mapping.set(0, -1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let remainder = Math.floor(sum % k);
    if (remainder < 0) {
      remainder += k;
    }
    if (mapping.has(remainder)) {
      console.log(i, "--", remainder);
      let len = i - mapping.get(remainder);
      if (len > ans) {
        ans = len;
      }
    } else {
      mapping.set(remainder, i);
    }
  }
  console.log(mapping);
  return ans;
}
let arr = [-3, -9, -4, 8, 5, 4, 2, 6]; // op: 6
let k = 7;
let res = longestSubarrayWithSumDivisibleByK(arr, k);
console.log("res", res);
