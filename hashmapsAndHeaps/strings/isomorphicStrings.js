// given s1 and s2
// 2 strings are called isomorphic if
// - every character of s1 can be mapped to s2
// - a character in s1 can be mapped to only one character
// - all occurences of a character must be replaced with another character while preserving the order of the characters

// let str1 = "abacba", let s2 = "xyxzyx"
function isomorphicStrings(s1, s2) {
  let mapping = new Map();
  let isUsed = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (mapping.has(s1[i])) {
      if (mapping.get(s1[i]) !== s2[i]) {
        return false;
      }
    } else {
      if (isUsed.has(s2[i])) {
        return false;
      } else {
        isUsed.set(s2[i], true);
      }
      mapping.set(s1[i], s2[i]);
    }
  }
  return true;
}

let s1 = "abacba";
let s2 = "xyxzyx";
let res = isomorphicStrings(s1, s2);
console.log("res", res);
