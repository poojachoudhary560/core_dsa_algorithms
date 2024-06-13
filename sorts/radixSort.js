// radix sort

function countSort11(arr, exp) {
  let ans = Array(arr.length);

  // make freq arr
  let freqArr = Array(10).fill(0); // rane is 10 here 0 to 9
  for (let i = 0; i < arr.length; i++) {
    freqArr[Math.floor(arr[i] / exp) % 10]++;
  }
  console.log(freqArr);
  // convert it to prefix sum array
  for (let i = 1; i < freqArr.length; i++) {
    freqArr[i] += freqArr[i - 1];
  }

  // stable sorting (filling ans array)

  for (let i = arr.length - 1; i >= 0; i--) {
    let posInFreqArr = freqArr[Math.floor(arr[i] / exp) % 10] - 1;
    ans[posInFreqArr] = arr[i];
    freqArr[Math.floor(arr[i] / exp) % 10]--;
  }

  // fill original arr
  for (let i = 0; i < arr.length; i++) {
    arr[i] = ans[i];
  }
}

function radixSort(arr) {
  let max = -Infinity;
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }

  let exp = 1;
  while (exp <= max) {
    countSort11(arr, exp);
    exp = exp * 10;
  }
}

let arr = [213, 97, 718, 123, 37, 443, 982, 64, 375, 683];
radixSort(arr);
console.log("arr", arr);
