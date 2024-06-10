// given arr of strings
// you have to group anagrams together

// let arr = ["abcc", "acbc", "badc", "abcd", "dabb", "babd", "dbca", "cabc"];

// op: [["abcc", "acbc", "cabc"], ["badc", "abcd", "dbca"], ["dabb", "babd"]];

function getCode(str) {
  let freqMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (freqMap.has(str[i])) {
      freqMap.set(str[i], freqMap.get(str[i]) + 1);
    } else {
      freqMap.set(str[i], 1);
    }
  }
  console.log("freqMap-", freqMap, freqMap.keys());
  let res = "";

  console.log(res);
  let newMap = new Map([...freqMap.entries()].sort());
  for (let i of newMap.keys()) {
    console.log("i", i, newMap[i]);
    res += i + newMap.get(i);
  }
  return res;
}
function groupAnagrams(arr) {
  let groupAnagramsMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let fmap = getCode(arr[i]);
    if (groupAnagramsMap.has(fmap)) {
      groupAnagramsMap.set(fmap, [...groupAnagramsMap.get(fmap), arr[i]]);
    } else {
      groupAnagramsMap.set(fmap, [arr[i]]);
    }
  }
  console.log("groupAnagramsMap", groupAnagramsMap);
  return groupAnagramsMap.values();
}

let arr = ["abcc", "acbc", "badc", "abcd", "dabb", "babd", "dbca", "cabc"];
let res = groupAnagrams(arr);
console.log("res", res);
