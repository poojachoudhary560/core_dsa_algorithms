function helper(arr, sum, n) {
    if(sum === 0) return 1;
    if(n === 0 && sum > 0) return 0;
    if(arr[n-1] <= sum) {
        return helper(arr, sum - arr[n-1], n-1) + helper(arr, sum, n-1);
    } else if(arr[n-1] > sum) {
        return helper(arr, sum, n-1);
    }
}

function countOfSubsetSum(arr, sum) {
    return helper(arr, sum, arr.length);
}

let ar = [2,3,5,6,8,10];
let sum = 10;

let countOfSubsetsWithSum = countOfSubsetSum(arr, sum);
console.log(countOfSubsetSum);
