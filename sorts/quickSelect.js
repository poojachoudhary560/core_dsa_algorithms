// quick select
// given an array of integers
// find the kth smallest element in array using quick select algorithm

function partitionByPivot(arr, pivot, low, high) {
  // all i to end unknown
  // 0 to j-1 smaller or equal to pivot
  // j to i-1 greater than pivot
  let i = low;
  let j = low;
  while (i <= high) {
    if (arr[i] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j - 1;
}

function quickSelect(arr, low, high, k) {
  let pivot = arr[high];
  let pivotIndex = partitionByPivot(arr, pivot, low, high);
  if (k > pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, high, k);
  } else if (k < pivotIndex) {
    return quickSelect(arr, low, pivotIndex - 1, k);
  } else {
    return arr[pivotIndex];
  }
}

let arr = [8, 3, 5, 2, 7, 6, 1, 4, 2];
let k = 4;
let res = quickSelect(arr, 0, arr.length - 1, k - 1);

console.log("res", res);
