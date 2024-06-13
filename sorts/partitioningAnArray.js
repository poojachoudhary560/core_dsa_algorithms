// partitioning an array
// i to end all are unknown at start
// 0 to j-1 less than equal to pivot
// j to i - 1 are greater than pivot

function partitioningAnArray(arr, pivot) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] > pivot) {
      i++;
    } else if (arr[i] <= pivot) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
      i++;
    }
  }
}

let arr1 = [7, 9, 4, 8, 3, 6, 2, 1]; // op:  [4, 3, 2, 1, 9, 6, 7, 8]

partitioningAnArray(arr1, 5);
console.log("arr1 ", arr1);
