// find all anagrams in a string
// given s1 and s2
// find count of s2's anagrams in s1
// let s1 = "cbaebabacd";
// let s2 = "abc";

// op: 2 where index: 0, 6

// let s1 = "abbacdadcdab";
// let s2 = "abbc";
// op: 1 index: 1 bbac
function checkMapItems(freqMapS1, freqMapS2) {
  let keys = freqMapS2.keys();
  console.log("in map check", freqMapS1, freqMapS2, keys);

  for (let i of keys) {
    if (freqMapS1.has(i)) {
      if (freqMapS1.get(i) !== freqMapS2.get(i)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
function allanagramsInAString(str1, str2) {
  let freqMapS2 = new Map();
  let freqMapS1 = new Map();
  let count = 0;
  let resPositions = "";
  for (let i = 0; i < str2.length; i++) {
    if (freqMapS2.has(str2[i])) {
      freqMapS2.set(str2[i], freqMapS2.get(str2[i]) + 1);
    } else {
      freqMapS2.set(str2[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (freqMapS1.has(str2[i])) {
      freqMapS1.set(str2[i], freqMapS1.get(str2[i]) + 1);
    } else {
      freqMapS1.set(str2[i], 1);
    }
  }
  let i = str2.length;
  let j = 0;
  while (i < str1.length) {
    if (checkMapItems(freqMapS1, freqMapS2)) {
      count += 1;
      resPositions += j + " ";
      console.log(
        "count " + count + " resPositions " + resPositions + " j " + j
      );
    }
    // add next
    if (freqMapS1.has(str1[i])) {
      freqMapS1.set(str1[i], freqMapS1.get(str1[i]) + 1);
    } else {
      freqMapS1.set(str1[i], 1);
    }

    // delete prev
    if (freqMapS1.get(str1[j]) === 1) {
      freqMapS1.delete(str1[j]);
    } else {
      freqMapS1.set(str1[j], freqMapS1.get(str1[j]) - 1);
    }
    i++;
    j++;
  }
  console.log("count", count, "-- resPositions---", resPositions);
  return {
    count,
    resPositions,
  };
}

let str1 = "cbaebabacd";
let str2 = "abc";
let res = allanagramsInAString(str1, str2);
console.log("res...", res);
