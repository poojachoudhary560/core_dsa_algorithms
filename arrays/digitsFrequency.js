// 2. Digits Frequency
// given number n and digit d, calculate freq of digit d in number n;

function digitsFrequency(num, digit) {
  let ans = 0;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    if (rem === digit) {
      ans++;
    }
  }
  return ans;
}

let res = digitsFrequency(542563637, 5);
console.log("res", res);
