// str = "bbacacdcbbcaadcdca";
// get minimum substring with all unique characters
// smallest substring of a string containing all unique characters of iteself
function minimumWindowSubstring2(str) {
  let uniqueSet = new Set();
  for (let i = 0; i < str.length; i++) {
    uniqueSet.add(str[i]);
  }
  console.log("unique set", uniqueSet);
  let freqMap = new Map();
  let i = -1;
  let j = -1;
  let ans = str;
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

      console.log("freq map.. 2", freqMap);

      if (uniqueSet.size === freqMap.size) {
        console.log("freq map.. 1", freqMap);
        break;
      }
    }
    console.log(
      "freqMap.size === uniqueSet.size",
      freqMap.size,
      "---",
      uniqueSet.size
    );

    while (j < i && freqMap.size === uniqueSet.size) {
      f2 = true;
      let potentialAns = str.substring(j + 1, i + 1);
      if (potentialAns.length < ans.length) {
        ans = potentialAns;
      }
      j++;
      if (freqMap.get(str[j]) === 1) {
        freqMap.delete(str[j]);
      } else {
        freqMap.set(str[j], freqMap.get(str[j]) - 1);
      }
    }

    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

// let str = "bbacacdcbbcaadcdca"; // op: acdcb
let str = "aabcbcdbca"; // op: dbca
let res = minimumWindowSubstring2(str);
console.log("res", res);
