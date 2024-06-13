// find pivot of sorted rotated array

function pivotOfSortedRotatedArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[high]) {
      high = mid;
    } else {
      low = mid + 1; // arr[mid] > arr[high]
    }
  }
  return arr[low];
}

// 10, 20, 30

let arr = [30, 40, 50, 10, 20];
let res = pivotOfSortedRotatedArray(arr);
console.log(res);
