// target sum pair
// find op in nlogn
// let arr = [12, 9, -48, 100, 43, 84, 74, 86, 34, -37, 60, -29, 44]
// target 160

function targetSumArr(arr, target) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target) {
      left++;
    } else if (arr[left] + arr[right] > target) {
      right--;
    } else {
      console.log(arr[left], " : ", arr[right]);
      left++;
      right--;
    }
  }
}
let arr = [12, 9, -48, 100, 43, 84, 74, 86, 34, -37, 60, -29, 44];
// op:
// 60 ' : ' 100
// 74 ' : ' 86
let target = 160;
targetSumArr(arr, target);
