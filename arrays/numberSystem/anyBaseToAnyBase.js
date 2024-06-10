// given number n with base b1,. convert it to a number of base b2

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

function anyBaseToAnyBase(num, b1, b2) {
  // let ans = 0;
  // let pow = 1;
  // while( num > 0) {
  //     let rem = num % b2;
  //     num = Math.floor(num / b2);
  //     ans += rem * pow;
  //     pow = pow * b1;
  // }
  // return ans;

  let resInDecimal = anyBaseToDecimal(num, b1);
  let resInBase = decimalToAnyBase(resInDecimal, b2);
  return resInBase;
}

let res = anyBaseToAnyBase(172, 8, 2); // 1111010
console.log("res", res);
