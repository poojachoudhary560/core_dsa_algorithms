// find longest substring with no repeating characters
// let str = "aabcbcdbca";
// let str = "abbacbcdbadbdbbdcb";

function longestSubstringWithNoRepeatingCharacters(str) {
  let i = -1;
  let j = -1;
  let freqMap = new Map();
  let ans = 0;
  while (true) {
    let f1 = false;
    let f2 = false;
    // acquire

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
        let len = i - j;
        if (len > ans) {
          ans = len;
        }
      }
    }

    while (j < i) {
      f2 = true;
      j++;
      freqMap.set(str[j], freqMap.get(str[j]) - 1);
      if (freqMap.get(str[j]) === 1) {
        break;
      }
    }

    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

let str = "abbacbcdbadbdbbdcb"; // op: 4
let res = longestSubstringWithNoRepeatingCharacters(str);
console.log("res", res);
