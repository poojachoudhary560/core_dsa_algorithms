function helper(arr, sum, n) {
    if(sum === 0) return true;
    if(n === 0) return false;
    if(arr[n-1] <= sum) {
        return helper(arr, sum - arr[n-1], n-1) || helper(arr, sum, n-1);
    } else {
        return helper(arr, sum, n-1);
    }
}

function subsetSumRecursive(arr, sum) {
    return helper(arr, sum, arr.length);
}

const arr = [2,3,7,8,10];
const sum = 11;

let result = subsetSumRecursive(arr, sum);
console.log(result);