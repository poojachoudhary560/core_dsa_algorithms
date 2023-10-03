function helper(arr, sum, n, t) {
    if(sum === 0) return true;
    if(n === 0) return false;
    if(arr[n-1] <= sum) {
        return t[n][sum] = helper(arr, sum - arr[n-1], n-1, t) || helper(arr, sum, n-1, t);
    } else if(arr[n-1] > sum) {
        return t[n][sum] = helper(arr, sum, n-1, t);
    }
}

function subsetSumRecursive(arr, sum) {
    let t = Array(arr.length + 1).fill(null).map(() => Array(sum + 1).fill(-1));
    console.log(t);
    return helper(arr, sum, arr.length, t);
}

let arr = [2,3,7,8,10];
let sum = 11;
let isSubsetSumPresent = subsetSumRecursive(arr, sum);
console.log(isSubsetSumPresent);