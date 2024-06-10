// count of subarrays with equal number of zeros and ones
// let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1];
// sum    0  -1 -2 -1 -2 -1 -2 -1  0 -1 -2 -1  0  1
// count  1   1  1  2  2  3  3  4  2  5  4  6  3
// op: 1 + 1 + 2 + 2 + 3 + 1 + 4 + 3 + 5 + 2 = 24

function countOfSubarrayWithEqualNumberOfZerosAndOnes(arr) {
  let mapping = new Map();
  mapping.set(0, 1);
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum += -1;
    } else {
      sum += arr[i];
    }
    if (mapping.has(sum)) {
      ans += mapping.get(sum);
      mapping.set(sum, mapping.get(sum) + 1);
    } else {
      mapping.set(sum, 1);
    }
  }
  return ans;
}

let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1]; //op: 24
let res = countOfSubarrayWithEqualNumberOfZerosAndOnes(arr);
console.log("res", res);
