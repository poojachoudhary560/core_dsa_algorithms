// given an array display arr using recursion
// arr = [10, 20, 30, 40 50];

function displayArr(arr, index) {
  if (index === arr.length) return;
  console.log(arr[index]);
  displayArr(arr, index + 1);
}

let ar = [10, 20, 30, 40, 50];
displayArr(ar, 0);
