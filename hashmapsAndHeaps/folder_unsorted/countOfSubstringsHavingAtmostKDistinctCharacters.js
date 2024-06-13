// count of substrings with at-most k distinct characters
// let str = "aabcbcdbca"; // k = 2 //
// a
// aa, a
// aab, ab, b
// bc, c
// bcb, cb, b
// bcbc, cbc, bc, c
// cd, d
// db, b
// bc, c
// ca, a

function countOfSubstringsHavingAtmostKDistinctCharacters(str, k) {
  let i = -1;
  let j = -1;
  let ans = 0;
  let res = [];
  let freqMap = new Map();

  while (true) {
    let f1 = false;
    let f2 = false;
    while (i < str.length - 1) {
      f1 = true;
      i++;
      if (freqMap.has(str[i])) {
        freqMap.set(str[i], freqMap.get(str[i]) + 1);
      } else {
        freqMap.set(str[i], 1);
      }

      if (freqMap.size <= k) {
        ans += i - j;
        // console.log(i, "------", j)

        // res.push(str.substring(j+1, i+1))
      } else {
        break;
      }
    }

    if (i === str.length - 1 && freqMap.size <= k) {
      break;
    }
    while (j < i) {
      f2 = true;
      j++;
      if (freqMap.get(str[j]) === 1) {
        freqMap.delete(str[j]);
      } else {
        freqMap.set(str[j], freqMap.get(str[j]) - 1);
      }
      if (freqMap.size <= k) {
        ans += i - j;
        // console.log(i, "--", j)
        // res.push(str.substring(j+1, i+1))
        break;
      }
    }
    // if(f1 === false && f2 === false) {
    //     break;
    // }
  }

  return ans;
}

let str = "aabcbcdbca";
let res = countOfSubstringsHavingAtmostKDistinctCharacters(str, 2);

console.log("res", res);
