// targetSumSubsets.js

// given an arr, find all subsets with given target
let ar = [10, 20, 30, 40, 50];
let target = 60;
//op: [10, 20, 30], [10, 50], [20, 40]

function targetSumSubsets(arr, target) {
  helper(arr, 0, target, 0, "");
}

function helper(arr, index, target, sum, subset) {
  if (arr.length === index) {
    if (sum === target) {
      console.log(subset + " .");
    }
    return;
  }
  helper(arr, index + 1, target, sum + arr[index], subset + arr[index] + ",");
  helper(arr, index + 1, target, sum, subset);
}

targetSumSubsets(ar, target);
