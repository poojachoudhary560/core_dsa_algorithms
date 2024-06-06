// given arr of size n
// create k subsets
// condition is each subset should have equal sum

function equalSumSubsetsPartition(arr, k) {
  let sumOfArr = 0;
  for (let i of arr) {
    sumOfArr += i;
  }
  if (k === 1) {
    return arr;
  }
  if (k > arr.length || sumOfArr % k != 0) return -1;
  let subsets = Array(k).fill(0);
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(Array());
  }
  solution(arr, 0, k, subsets, 0, ans);
}

function solution(arr, index, k, subsets, subsetHasElements, ans) {
  if (index === arr.length) {
    if (subsetHasElements === k) {
      let flag = true;
      for (let i = 0; i < subsets.length - 1; i++) {
        if (subsets[i] !== subsets[i + 1]) {
          // console.log(subsets[i] !== subsets[i+1])
          flag = false;
          break;
        }
      }
      if (flag) {
        console.log("ans", JSON.stringify(ans));
      }
    }
    return;
  }
  for (let i = 0; i < ans.length; i++) {
    if (ans[i].length > 0) {
      ans[i].push(arr[index]);
      subsets[i] += arr[index];
      solution(arr, index + 1, k, subsets, subsetHasElements, ans);
      subsets[i] -= arr[index];
      ans[i].pop();
    } else {
      ans[i].push(arr[index]);
      subsets[i] += arr[index];
      solution(arr, index + 1, k, subsets, subsetHasElements + 1, ans);
      subsets[i] -= arr[index];
      ans[i].pop();
      break;
    }
  }
}

let ar = [1, 2, 3, 4, 5, 6];
equalSumSubsetsPartition(ar, 3);
