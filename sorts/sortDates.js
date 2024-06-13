// given array of different dates DDMMYYYY
// sort these dates in increasing order

function countSort(arr, divisor, mod, range) {
  let ans = Array(arr.length);

  // make freq arr
  let freqArr = Array(range).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freqArr[Math.floor(parseInt(arr[i], 10) / divisor) % mod]++;
  }

  // make prefix sum arr from freq arr
  for (let i = 1; i < freqArr.length; i++) {
    freqArr[i] += freqArr[i - 1];
  }

  // stable sort
  for (let i = arr.length - 1; i >= 0; i--) {
    let positionInFreqArr =
      freqArr[Math.floor(parseInt(arr[i], 10) / divisor) % mod] - 1;
    ans[positionInFreqArr] = arr[i];
    freqArr[Math.floor(parseInt(arr[i], 10) / divisor) % mod]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = ans[i];
  }
}

function sortDates() {
  let arr = ["12041996", "20101996", "05061997", "12041989", "11081987"];
  // get date month and year
  // date: 05-06-1997 / 1 00 0000 % 100
  // month: 05-06-1997 / 10000 % 100
  // year: 05-06-1997 / 1 % 1000

  countSort(arr, 1000000, 100, 32);
  countSort(arr, 10000, 100, 13);
  countSort(arr, 1, 10000, 2501);
  console.log(arr);
}
sortDates();
