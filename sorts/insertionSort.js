// insertion sort
// loop i will go thorough n-1 times => 1 to arr.length-1
// consider 0th element sorted and starting 1st element we will do reverse bubble and check

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let arr = [5, 9, 8, 1, 2];
insertionSort(arr);
console.log(arr);
