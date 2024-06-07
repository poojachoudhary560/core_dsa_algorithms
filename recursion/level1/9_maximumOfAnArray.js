let arr = [22, 33, 4, 19, 7];

function maximumOfArray(arr, index) {
  if (arr.length - 1 === index) {
    return arr[index];
  }
  let max = maximumOfArray(arr, index + 1);
  return Math.max(arr[index], max);
}

maximumOfArray(arr, 0);
