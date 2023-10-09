function helper(x, y, m, n) {
  if (x[m - 1] === y[n - 1]) {
    return 1 + helper(x, y, m - 1, n - 1);
  } else {
    return Math.max(helper(x, y, m, n - 1), helper(x, y, m - 1, n));
  }
}

function lcsLength(x, y) {
  return helper(x, y, x.length, y.length);
}

let a = "abcdgh";
let b = "abedfhr";
// abdh

let res = lcsLength(a, b);
console.log("res", res);
