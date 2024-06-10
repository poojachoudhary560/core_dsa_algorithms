// given an arr of strings
// group the given strings in suvh a way that all strings in a group are shifyed versions of each other
// two strings s1 and s2 are shifted if:
// - length of both the strings are same
// - the difference between ASCII value of every character of s1 and s2 is constant
// ip: ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"];
// op: [acd, dfg, wyz, yab]
// [a, x]
// [bdfh, moqs]

function getDiff(str) {
  let res = "";
  for (let i = 1; i < str.length; i++) {
    let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
    if (diff < 0) {
      diff += 26;
    }
    // if(i === str.length-1) {
    //     res += diff
    // } else {
    res += diff + "#";
    // }
  }
  res += ".";
  console.log("res", res);
  return res;
}
function groupShiftedStrings(arr) {
  let groupMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let freqStr = getDiff(arr[i]);
    if (groupMap.has(freqStr)) {
      groupMap.set(freqStr, [...groupMap.get(freqStr), arr[i]]);
    } else {
      groupMap.set(freqStr, [arr[i]]);
    }
  }
  return groupMap;
}

let arr = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"];
let res = groupShiftedStrings(arr);
console.log("res", res.values());
