function largestSquareSubmatrixOfAll1s(arr) {
    let dp = Array(arr.length).fill(null).map(() => Array(arr[0].length));
    let ans = 0;

    for (let i = dp.length - 1; i >= 0; i--) {
        for (let j = dp[0].length; j >= 0; j--) {
            if (i === dp.length - 1 && j === dp[0].length - 1) {
                dp[i][j] = arr[i][j];
            } else if (i === dp.length - 1) {
                dp[i][j] = arr[i][j];
            } else if (j === dp[0].length - 1) {
                dp[i][j] = arr[i][j];
            } else {
                if (arr[i][j] === 0) {
                    dp[i][j] = 0;
                } else {
                    let min = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
                    dp[i][j] = min + 1;
                    if (dp[i][j] > ans) {
                        ans = dp[i][j];
                    }
                }
            }
        }
    }
    return ans;
}

function main() {
    let arr = [
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
    ];
    let res = largestSquareSubmatrixOfAll1s(arr);
    console.log(res);
}

main();