// num 2 > num1

function anyBaseSubstraction(num1, num2, base) {
  let ans = 0;

  let carry = 0;
  let power = 1;
  while (num2 > 0) {
    let digit1 = num1 % 10;
    num1 = Math.floor(num1 / 10);

    let digit2 = num2 % 10;
    num2 = Math.floor(num2 / 10);

    let res = 0;
    digit2 = digit2 + carry;

    if (digit2 >= digit1) {
      res = digit2 - digit1;
      carry = 0;
    } else {
      res = digit2 + base - digit1;
      carry = -1;
    }
    ans += res * power;
    power = power * 10;
  }
  return ans;
}

let res = anyBaseSubstraction(256, 1212, 8); // 734
console.log("res", res);
