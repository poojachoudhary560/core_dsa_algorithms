function countOfSubsetSumIterative(arr, n, sum) {
  let t = Array(n + 1)
    .fill(null)
    .map(() => Array(sum + 1));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i === 0) {
        t[i][j] = 0;
      }
      if (j === 0) {
        t[i][j] = 1;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][sum];
}

function subsetCountWithAGivenDifference(arr, n, diff) {
  // s1 + s2 = range;
  // s1 - s2 = diff;
  // s1 = (range + diff) / 2;
  let range = 0;
  for (let i of arr) {
    range += i;
  }
  let sum = (range + diff) / 2;
  let count = countOfSubsetSumIterative(arr, n, sum);
  return count;
}

let arr = [1, 1, 2, 3];
let diff = 1;

let res = subsetCountWithAGivenDifference(arr, arr.length, diff);
console.log(res); //4
