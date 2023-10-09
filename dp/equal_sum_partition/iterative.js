function helper(arr, sum, n) {
  let t = Array(n + 1)
    .fill(null)
    .map(() => Array(sum + 1));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i === 0) t[i][j] = false;
      if (j === 0) t[i][j] = true;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][sum];
}

function equalSumPartition(arr) {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  if (total % 2 !== 0) return false;
  return helper(arr, total / 2, arr.length);
}

let arr = [1, 5, 11, 5];
let res = equalSumPartition(arr);
console.log(res);
