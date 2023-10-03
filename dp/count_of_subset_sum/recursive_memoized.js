function helper(arr, sum, n, t) {
    if(n===0 && sum>0) return 0;
    if(sum === 0) return 1;
    if(t[n][sum] !== -1) return t[n][sum];

    if(arr[n-1] <= sum) {
        return t[n][sum] = helper(arr, sum - arr[n-1], n-1, t) + helper(arr, sum, n-1, t);
    } else if(arr[n-1] > sum) {
        return t[n][sum] = helper(arr, sum, n-1, t);
    }
}

function countOfSubsetSumMemoized(arr, sum) {
    let t = Array(arr.length + 1).fill(-1).map(() => Array(sum + 1).fill(-1));
    return helper(arr, sum, arr.length, t);
}

let ar = [2,3,5,6,8,10];
let sum = 10;
let res = countOfSubsetSumMemoized(ar, sum);
console.log(res);