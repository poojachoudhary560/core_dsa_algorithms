// count of subarrays with sum divisible by k
//
// let arr = [2, 3, 5, 4, 5, 3, 4]; // k =7
// sum:   0   2  5 10 14 19 22 26
// rem:   0   2  5  3  0  5  1  5
// freq:  1   1  1  1  2  2  1  3
// op:  1 + 1 + 2 = 4

// let arr = [2, -6, 3, 1, 2, 8, 2, 1] // k=7
// sum:   0   2  -4 -1  0  2 10 12 13
// rem:   0   2   3  6  0  2  3  5  6
// freq:  1   1   1  1  2  2  2  1  2
// op: 1 + 1 + 1 + 1

function countSubarraysumDivisibleByK(arr, k) {
  let sum = 0;
  let mapping = new Map();
  let count = 0;
  mapping.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let remainder = Math.floor(sum % k);
    if (remainder < 0) {
      remainder += k;
    }
    if (mapping.has(remainder)) {
      count += mapping.get(remainder);
      mapping.set(remainder, mapping.get(remainder) + 1);
    } else {
      mapping.set(remainder, 1);
    }
  }
  return count;
}
// let arr = [2, 3, 5, 4, 5, 3, 4]; //op:  4
let arr = [2, -6, 3, 1, 2, 8, 2, 1]; //op: 4
let k = 7;
let res = countSubarraysumDivisibleByK(arr, k);
console.log("res", res);
