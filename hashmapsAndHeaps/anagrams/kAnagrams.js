// given string s1, s2 and no k
// find if 2 strings are k anagrams of each other
// Def of k anagrams:
//  - both s1 and s2 have same no of char
//  - after changing k characters ina astring, s1 and s2 become anagrams of each other

// s1 = "fodr" s2="gork" // k =2 //  op: true

function kAnagrams(str1, str2, k) {
  if (str1.length !== str2.length) return false;
  let s1FreqMap = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (s1FreqMap.has(str1[i])) {
      s1FreqMap.set(str1[i], s1FreqMap.get(str1[i]) + 1);
    } else {
      s1FreqMap.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (s1FreqMap.get(str2[i]) > 0) {
      s1FreqMap.set(str2[i], s1FreqMap.get(str2[i]) - 1);
    }
  }

  let count = 0;
  for (let i of s1FreqMap.values()) {
    console.log(i);
    if (i > 0) {
      count += i;
    }
  }

  if (count === k) return true;
  return false;
}
let s1 = "fodr";
let s2 = "gork";
let k = 2;
let res = kAnagrams(s1, s2, k);
console.log("res", res);
