// add 2 number

function anyBaseAddition(num1, num2, base) {
  let ans = 0;
  let pow = 1;
  let c = 0;
  while (num1 > 0 || num2 > 0 || c > 0) {
    let rem1 = num1 % 10;
    let rem2 = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    let sum = rem1 + rem2 + c;
    c = Math.floor(sum / base);
    sum = sum % base;
    ans += sum * pow;
    pow = pow * 10;
  }
  return ans;
}

let res = anyBaseAddition(236, 754, 8);
console.log("res", res);
