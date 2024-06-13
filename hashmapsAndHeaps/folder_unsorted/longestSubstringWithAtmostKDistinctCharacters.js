// longest substring with atmost k unique characters
// let str = "aabcbcdbca"; // k=2 // op: 4
// let str = "ddacbbaccdedacebb"; // k=3 // op: acbbacc - 7

function longestSubstringWithAtmostKDistinctCharacters(str, k) {
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
      if (freqMap.get(str[i]) === 1) {
        freqMap.set(str[i], freqMap.get(str[i]) + 1);
      } else {
        freqMap.set(str[i], 1);
      }

      if (freqMap.size <= k) {
        let len = i - j;
        if (len > ans) {
          ans = len;
        }
      } else {
        break;
      }
    }

    while (j < i) {
      j++;
      f2 = true;
      if (freqMap.get(str[j]) === 1) {
        freqMap.delete(str[j]);
      } else {
        freqMap.set(str[j], freqMap.get(str[j]) - 1);
      }
      if (freqMap.size <= k) {
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

let str = "ddacbbaccdedacebb"; // op: 7
let res = longestSubstringWithAtmostKDistinctCharacters(str, 3);
console.log("res", res);
