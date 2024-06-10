// given number num with base b
// convert it to decimal

function anyBaseToDecimal(num, b) {
  let ans = 0;
  let pow = 1;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);

    ans += pow * rem;
    pow = pow * b;
  }
  return ans;
}

let res = anyBaseToDecimal(1172, 8); // 634
console.log("res", res);
