function helper(x, y, m, n, t) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (t[m][n] !== -1) {
    return t[m][n];
  }
  if (x[m - 1] === y[n - 1]) {
    return (t[m][n] = 1 + helper(x, y, m - 1, n - 1, t));
  } else {
    return (t[m][n] = Math.max(
      helper(x, y, m - 1, n, t),
      helper(x, y, m, n - 1, t)
    ));
  }
}

function lcsRecursiveMemoized(x, y) {
  let t = Array(x.length + 1)
    .fill(null)
    .map(() => Array(y.length + 1).fill(-1));
  return helper(x, y, x.length, y.length, t);
}

let a = "abcdgh";
let b = "abedfh";
let res = lcsRecursiveMemoized(a, b);
console.log(res); // 4
