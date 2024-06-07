// find x to the power of n using recursion

function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}

power(2, 3);
