function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let ar = [37, 45, 29, 8, 22, 1];

bubbleSort(ar);

// 37 45 29 8 22 1

// iteration 1

// 1.1  37 45 29 8 22 1
// 1.2  37 29 45 8 22 1
// 1.3  37 29 8 45 22 1
// 1.4  37 29 8 22 45 1
// 1.5  37 29 8 22 1 45

// iteraytion 2
// 2.1 29 37 8 22 1 45
// 2.2 29 8 37 22 1 45
// 2.3 29 8 22 37 1 45
// 2.4 29 8 22 1 37 45

// iteration 3
// 3.1 8 29 22 1 37 45
// 3.2 8 22 29 1 37 45
// 3.3 8 22 1 29 37 45

// iteration 4
// 4.1 8 22 1 29 37 45
// 4.2 8 1 22 29 37 45

// iteration 5
// 5.1 1 8 22 29 37 45

// points
// loop i run no of items -1 times
// if no of items are 6 and 5 items are sorted, last one is automatically sorted
// and for each loop j run, as last items are sorted, no of items to sort are reduced
