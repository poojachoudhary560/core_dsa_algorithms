// given an array of integers and a number k
// find count of subarrays whose sum equals K

// let arr= [3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1];
// let k = 5
// let arr= [3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1];
// sum:   0  3 12  10 14 15   8 10 16  11 19  16   9 15 17 18
// map:   1  1  1   1  1  1   1  2  1   1  1   2   1  2  1  1
// op: 1 + 1 + 1 + 1 + 2 + 1
// op 7

function countOfSubarraysWithSumEqualsToK(arr, k) {
  let mapping = new Map();
  mapping.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let res = sum - k;
    if (mapping.has(res)) {
      count += mapping.get(res);
    }
    if (mapping.has(sum)) {
      mapping.set(sum, mapping.get(sum) + 1);
    } else {
      mapping.set(sum, 1);
    }
  }
  return count;
}

let arr = [3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1];
let res = countOfSubarraysWithSumEqualsToK(arr, 5);
console.log("res", res);
