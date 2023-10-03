function helper(wt, val, W, n, t) {
    if(n===0 || W===0) return 0;
    if(t[n][W] !== -1) return t[n][W];
    if(wt[n-1] <= W) {
        return t[n][W] = Math.max(val[n-1] + helper(wt, val, W-wt[n-1], n-1, t), helper(wt, val, W, n-1, t));
    } else if(wt[n-1] > W) {
        return t[n][W] = helper(wt, val, W, n-1, t);
    }
}

function knapsack(wt, val, W) {
    let t = Array(wt.length + 1).fill(null).map(() => Array(W+1).fill(-1));
    return helper(wt, val, W, wt.length, t);
}

const wt = [1,3,4,5];
const val = [1,4,5,7];
const W = 7;

let maxProfit = knapsack(wt, val, W);
console.log(maxProfit);