let arr = [2, 3, 6, 9, 8, 3, 2, 3, 6, 4]; // [1, 5, 7]
let target = 3;

function allIndicesInArray(arr, i, target, targetCount) {
  if (i === arr.length) {
    return Array(targetCount);
  }
  if (arr[i] === target) {
    targetCount += 1;
  }
  let res = allIndicesInArray(arr, i + 1, target, targetCount);
  if (arr[i] === target) {
    res[targetCount - 1] = i;
  }
  return res;
}

allIndicesInArray(arr, 0, target, 0);

function allIndicesInArray1(arr, i, target, targetCount) {
  console.log("targetCount, ", arr[i], "..", targetCount);
  if (i === arr.length) return Array(targetCount);
  if (target === arr[i]) {
    let res = allIndicesInArray1(arr, i + 1, target, targetCount + 1);
    res[targetCount] = i;
    return res;
  } else {
    let res = allIndicesInArray1(arr, i + 1, target, targetCount);
    return res;
  }
}
// let arr = [2, 3, 6, 9, 8, 3, 2, 3, 6, 4]; // [1, 5, 7]
// let target = 3;
allIndicesInArray1(arr, 0, 3, 0);
