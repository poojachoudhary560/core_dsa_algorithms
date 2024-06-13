// count substrings without repeating characters
// count of substrings having all unique characters
// let str = "aabcbcdbca";
// let str = ""

// Eg abcd
// starting with a: a, ab, abc, abcd
// starting with b: b, bc, bcd
// starting with c: c, cd
// starting with d: d

// abbd // op: 6
// starting with a: a, ab, (wrong: abb, abbd)
// starting with b: b (wrong: bb, bbd)
// starting with other b: b, bd
// starting with d: d

function countSubstringWithoutRepeatingCharacters(str) {
  let i = -1;
  let j = -1;

  let ans = 0;
  let freqMap = new Map();
  while (true) {
    let f1 = false;
    let f2 = false;
    while (i < str.length - 1) {
      f1 = true;
      i++;
      if (freqMap.has(str[i])) {
        freqMap.set(str[i], freqMap.get(str[i]) + 1);
      } else {
        freqMap.set(str[i], 1);
      }
      if (freqMap.get(str[i]) === 2) {
        break;
      } else {
        ans += i - j;
      }
    }

    while (j < i) {
      f2 = true;
      j++;
      freqMap.set(str[j], freqMap.get(str[j]) - 1);
      if (freqMap.get(str[j]) === 1) {
        ans += i - j;
        break;
      }
    }

    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

let str = "aabcbcdbca"; // op: 24
let res = countSubstringWithoutRepeatingCharacters(str);
console.log("res", res);
