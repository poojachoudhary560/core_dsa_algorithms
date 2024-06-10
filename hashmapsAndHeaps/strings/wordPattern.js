// given 2 strings s1 and s2
// s1 represnts a word of length n
// s2 represents n space-separated words
// find if words in s2follow the exact order as characters in s1

function wordPattern(s1, s2) {
  s2 = s2.split(" ");
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
        mapping.set(s1[i], s2[i]);
      }
    }
  }
  return true;
}

let s1 = "abab";
let s2 = "pep coding pep coding";

let res = wordPattern(s1, s2);
console.log("res", res);
