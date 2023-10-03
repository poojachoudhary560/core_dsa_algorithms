function helper(wt, val, W, n) {
    if(n===0 || W===0) return 0;
    if(wt[n-1] <= W) {
        return Math.max(val[n-1] + helper(wt, val, W-wt[n-1], n-1), helper(wt, val, W, n-1));
    } else if(wt[n-1] > W) {
        return helper(wt, val, W, n-1);
    }
}

function knapsack(wt, val, W) {
    return helper(wt, val, W, wt.length);
}

const wt = [1,3,4,5];
const val = [1,4,5,7];
const W = 7;
let maxProit = knapsack(wt, val, W);
console.log(maxProit); // 9