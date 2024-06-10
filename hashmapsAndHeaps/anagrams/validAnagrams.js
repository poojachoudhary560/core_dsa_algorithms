// valid anagrams
// let s1 = "pepcoding";
// let s2 = "codingpep";

function validAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  let freqMapS1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (freqMapS1.has(s1[i])) {
      freqMapS1.set(s1[i], freqMapS1.get(s1[i]) + 1);
    } else {
      freqMapS1.set(s1[i], 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (freqMapS1.has(s2[i])) {
      // freqMapS1.set(s1[i], freqMapS1.get(s1[i]) + 1);
      if (freqMapS1.get(s2[i]) === 1) {
        freqMapS1.delete(s2[i]);
      } else {
        freqMapS1.set(s2[i], freqMapS1.get(s2[i]) - 1);
      }
    } else {
      return false;
    }
  }

  return true;
}

let s1 = "pepcoding";
let s2 = "codingpep";
let res = validAnagrams(s1, s2);
console.log("res", res);
