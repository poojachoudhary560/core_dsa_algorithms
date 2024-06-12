class Pair {
  constructor(len, index, val, psf) {
    this.len = len;
    this.index = index;
    this.val = val;
    this.psf = psf;
  }
}

function printAllLCS(arr) {
  let overallMax = 0;
  let overallIndex = 0;
  let dp = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        if (dp[j] > max) {
          max = dp[j];
        }
      }
    }
    dp[i] = max + 1;
    if (dp[i] > overallMax) {
      overallMax = dp[i];
      overallIndex = i;
    }
  }
  console.log(overallMax);
  let queue = [];
  let newPair = new Pair(
    overallMax,
    overallIndex,
    arr[overallIndex],
    arr[overallIndex] + " "
  );
  queue.push(newPair);

  while (queue.length > 0) {
    let rem = queue.pop();

    if (rem.len === 1) {
      console.log(rem.psf);
    }
    for (let j = rem.index - 1; j >= 0; j--) {
      if (dp[j] === rem.len - 1 && arr[j] <= rem.val) {
        let newNode = new Pair(dp[j], j, arr[j], arr[j] + " -> " + rem.psf);
        queue.push(newNode);
      }
    }
  }
}

let ar = [10, 22, 9, 33, 21, 50, 41, 60, 80, 1]; // 6
printAllLCS(ar);
