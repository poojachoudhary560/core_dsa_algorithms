// longest substring with exactly K distinct(unique) chartacters
// let str = "aabcbcdbca"; // k =2 // op: 4 bcbc

function longestSubstringWithKDistinct(str, k) {
  let i = -1;
  let j = -1;
  let ans = 0;
  let freqMap = new Map();
  while (true) {
    let f1 = false;
    let f2 = false;

    while (i < str.length - 1) {
      i++;
      f1 = true;
      if (freqMap.has(str[i])) {
        freqMap.set(str[i], freqMap.get(str[i]) + 1);
      } else {
        freqMap.set(str[i], 1);
      }
      if (freqMap.size === k) {
        let len = i - j;
        if (len > ans) {
          ans = len;
        }
      } else if (freqMap.size > k) {
        break;
      }
    }

    while (j < i) {
      f2 = true;
      j++;
      if (freqMap.get(str[j]) === 1) {
        freqMap.delete(str[j]);
      } else {
        freqMap.set(str[j], freqMap.get(str[j]) - 1);
      }

      if (freqMap.size === k) {
        let len = i - j;
        if (len > ans) {
          ans = len;
        }
        break;
      }
    }

    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

let str = "aabcbcdbca"; // 4
let res = longestSubstringWithKDistinct(str, 2);
console.log("res", res);
