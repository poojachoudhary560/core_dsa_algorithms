function helper(arr, sum, n, t) {
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<sum+1; j++) {
            if(i===0) t[i][j] = 0;
            if(j===1) t[i][j] = 1;
        }
    }

    for(let i=1; i<n+1; i++) {
        for(let j=1; j<sum+1; j++) {
            if(arr[i-1] <= j) {
                t[i][j] = t[i-1][j-arr[i-1]] + t[i-1][j];
            } else if(arr[i-1] > j) {
                t[i][j] = t[i-1][j];
            }
        }
    }
    return t[n][sum];
}

function countOfSubsetSumIterative(arr, sum) {
    let t = Array(arr.length).fill(null).map(() => Array(sum+1));
    return helper(arr, sum, arr.length, t);
}

let ar = [2,3,5,6,8,10];
let sum = 11;
let res = countOfSubsetSumIterative(arr, sum);
console.log(res);