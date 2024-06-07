// given an array print it in reverse

function printArrayInReverse(arr, idx) {
  if (idx === arr.length) return;
  printArrayInReverse(arr, idx + 1);
  console.log(arr[idx]);
}

let ar = [10, 20, 30, 40, 50];
printArrayInReverse(ar, 0);
