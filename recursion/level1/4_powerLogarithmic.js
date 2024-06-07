// find x to the power of n using recursion with logarithmic time

function power(x, n) {
  if (n === 0) return 1;
  let powerBy2 = Math.floor(n / 2);
  let calcXDivide2 = power(x, powerBy2);
  if (n % 2 === 0) {
    // let calcXDivide2 = power(x, n / 2);
    return calcXDivide2 * calcXDivide2;
  }
  return x * calcXDivide2 * calcXDivide2;
}

console.log(power(2, 3));
console.log(power(2, 4));
