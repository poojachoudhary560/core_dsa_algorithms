function longestBitonicSubsequence(arr) {
  // longest increasing subsequence
  let lis = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        if (max < lis[j]) {
          max = lis[j];
        }
      }
    }
    lis[i] = max + 1;
  }
  console.log(lis);
  // longest decreasing subsequence
  let lds = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let max = 0;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] <= arr[i]) {
        if (lds[j] > max) {
          max = lds[j];
        }
      }
    }
    lds[i] = max + 1;
  }
  console.log(lds);

  let overallMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (lis[i] + lds[i] - 1 > overallMax) {
      overallMax = lis[i] + lds[i] - 1;
    }
  }

  console.log(overallMax);
}

let ar = [10, 22, 9, 33, 21, 50, 41, 60, 80, 1]; // 7
//         1   2  1   3
longestBitonicSubsequence(ar);
