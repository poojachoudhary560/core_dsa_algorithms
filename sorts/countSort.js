// given an array, sort array in increasing order using count sort

function countSort(arr, min, max) {
  let range = max - min + 1;
  let freqArr = Array(range).fill(0);
  console.log(freqArr);
  for (let i = 0; i < arr.length; i++) {
    let idx = arr[i] - min;
    freqArr[idx]++;
  }

  for (let i = 1; i < freqArr.length; i++) {
    freqArr[i] = freqArr[i] + freqArr[i - 1];
  }
  console.log(freqArr);
  let ans = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let item = arr[i];
    let position = freqArr[item - min];
    let index = position - 1;
    ans[index] = item;
    freqArr[item - min]--;
  }
  return ans;
}

let arr = [9, 6, 3, 5, 3, 4, 3, 9, 6, 4, 6, 5, 8, 9, 9];
let ans = countSort(arr, 3, 9);
console.log("ans", ans);
