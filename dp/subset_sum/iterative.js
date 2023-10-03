function helper(arr, sum, n, t) {
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<sum+1; j++) {
            if(i===0) t[i][j] = false;
            if(j===0) t[i][j] = true;
        }
    }

    for(let i=1; i<n+1; i++) {
        for(let j=1; j<sum+1; j++) {
            if(arr[i-1] <= j) {
                t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j];
            } else if(arr[i-1] > j) {
                t[i][j] = t[i-1][j];
            }
        }
    }
    console.log(t);
    return t[n][sum];
}
function subsetSumIterative(arr, sum) {
    let t = Array(n+1).fill(null).map(() => Array(sum+1));
    return helper(arr, sum, arr.length, t);
}

let arr = [2,3,7,8,10];
let sum = 11;
let result =  subsetSumIterative(arr, sum);
console.log(result);