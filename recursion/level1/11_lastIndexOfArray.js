let arr = [2, 3, 6, 9, 8, 3, 2, 3, 6, 4]; // 7
let target = 3;

function lastIndexOfArray(arr, index, target) {
  if (index === arr.length) return -1;
  let res = lastIndexOfArray(arr, index + 1, target);
  if (arr[index] === target && res === -1) {
    return index;
  }
  return res;
}
lastIndexOfArray(arr, 0, target);
