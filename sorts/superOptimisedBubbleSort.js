function superOptimizedBubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) {
      return arr;
    }
  }

  return arr;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let ar = [37, 45, 29, 8, 22, 1];

superOptimizedBubbleSort(ar);
