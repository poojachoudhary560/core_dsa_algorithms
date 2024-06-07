let arr = [2, 3, 9, 8, 7, 6, 4, 12, 7, 3, 8]; // op 3

function firstOccurenceOfArray(arr, i, target) {
  if (arr.length === i) return -1;
  let occurence = firstOccurenceOfArray(arr, i + 1, target);
  if (arr[i] === target) {
    occurence = i;
  }
  return occurence;
}

firstOccurenceOfArray(arr, 0, 8);
