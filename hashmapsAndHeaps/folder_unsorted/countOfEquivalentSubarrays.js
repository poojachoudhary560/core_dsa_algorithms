// find count of equivalent subarrays
// a subarray is equivalent if
// count of unique integers in subarray === count of unique integers in given array

// let arr = [2, 5, 3, 5, 2, 4, 1, 3, 1, 4] // op: 4 + 4 + 4 + 3 = 15

function countOfEquivalentSubarrays(arr) {
  let freqMap = new Map();
  let i = -1;
  let j = -1;
  let ans = 0;
  let uniqueSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    uniqueSet.add(arr[i]);
  }

  while (true) {
    let f1 = false;
    let f2 = false;
    while (i < arr.length - 1) {
      f1 = true;
      i++;
      if (freqMap.has(arr[i])) {
        freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
      } else {
        freqMap.set(arr[i], 1);
      }

      if (freqMap.size === uniqueSet.size) {
        ans += arr.length - i;
        break;
      }
    }

    while (j < i) {
      f2 = true;
      j++;
      if (freqMap.get(arr[j]) === 1) {
        freqMap.delete(arr[i]);
      } else {
        freqMap.set(arr[j], freqMap.get(arr[j]) - 1);
      }
      if (freqMap.size === uniqueSet.size) {
        ans += arr.length - i;
      } else {
        break;
      }
    }

    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

let arr = [2, 5, 3, 5, 2, 4, 1, 3, 1, 4];
let res = countOfEquivalentSubarrays(arr);
console.log("res", res);
