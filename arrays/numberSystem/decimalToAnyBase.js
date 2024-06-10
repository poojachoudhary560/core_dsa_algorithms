// given a decimal number n and a base b
// convert number n into its corresponding value in base b

function decimalToAnyBase(num, base) {
  let ans = 0;
  let pow = 1;
  while (num > 0) {
    let rem = num % base;
    num = Math.floor(num / base);
    ans += rem * pow;
    pow = pow * 10;
  }
  return ans;
}

let res = decimalToAnyBase(63, 8); // 77
let res1 = decimalToAnyBase(634, 8); // 1172
console.log("res", res, res1);
