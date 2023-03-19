function mergeArrays(ar1, ar2) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < ar1.length && j < ar2.length) {
    if (ar2[j] > ar1[i]) {
      results.push(ar1[i]);
      i++;
    } else {
      results.push(ar2[j]);
      j++;
    }
  }
  while (i < ar1.length) {
    results.push(ar1[i]);
    i++;
  }
  while (j < ar2.length) {
    results.push(ar2[j]);
    j++;
  }
  return results;
}

function mergeSorts(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSorts(arr.slice(0, mid));
  let right = mergeSorts(arr.slice(mid));
  return mergeArrays(left, right);
}

// mergeArrays([1,3,6], [2,4,5])

mergeSorts([10, 24, 76, 73]);
