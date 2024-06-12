class Pair {
  constructor(i, j, psf) {
    this.i = i;
    this.j = j;
    this.psf = psf;
  }
}

function printSubsetsWithTargetSum(ar, target) {
  let dp = Array(ar.length + 1)
    .fill(null)
    .map(() => Array(target + 1).fill(false));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = false;
      } else {
        if (dp[i - 1][j]) {
          dp[i][j] = true;
        } else if (j >= ar[i - 1]) {
          if (dp[i - 1][j - ar[i - 1]] === true) {
            dp[i][j] = true;
          }
        }
      }
    }
  }
  console.log(dp);
  console.log(dp[ar.length][target]);

  let queue = [];
  let newPair = new Pair(ar.length, target, "");
  queue.push(newPair);

  while (queue.length > 0) {
    // console.log(queue)

    let rem = queue.pop();
    // console.log(rem)
    if (rem.i === 0 || rem.j === 0) {
      console.log(rem.psf);
    } else {
      if (rem.j >= ar[rem.i - 1]) {
        let include = dp[rem.i - 1][rem.j - ar[rem.i - 1]];
        if (include) {
          let newIncludeNode = new Pair(
            rem.i - 1,
            rem.j - ar[rem.i - 1],
            rem.i - 1 + " " + rem.psf
          );
          queue.push(newIncludeNode);
        }
      }
      let exclude = dp[rem.i - 1][rem.j];
      if (exclude) {
        let newExcludeNode = new Pair(rem.i - 1, rem.j, rem.psf);
        queue.push(newExcludeNode);
      }
    }
  }
}

let ar = [4, 2, 7, 1, 3];
let target = 10;
printSubsetsWithTargetSum(ar, target);
