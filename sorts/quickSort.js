// quick sort

function partitionArrayByPivot(arr, pivot, low, high) {
  let i = low;
  let j = low;
  while (i <= high) {
    if (arr[i] > pivot) {
      i++;
    } else {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
      i++;
    }
  }
  return j - 1;
}

function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let pivot = arr[high];
  let pivotIndex = partitionArrayByPivot(arr, pivot, low, high);
  quickSort(arr, low, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, high);
}

let arr1 = [7, 9, 4, 8, 3, 6, 2, 1];
quickSort(arr1, 0, arr1.length - 1);
console.log("ans: ", arr1);
