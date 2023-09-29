// s1 = "dbaecbbabdcaafbddcabgba"
// s2 = "abbcdc"
// ans "cbbabdc"

function minimumWindowSubstring(s1, s2) {
  let s2Map = {};
  let s1Map = {};
  let ans = "";
  for (let i = 0; i < s2.length; i++) {
    if (s2Map[s2[i]] === undefined) {
      s2Map[s2[i]] = 1;
    } else {
      s2Map[s2[i]] += 1;
    }
  }
  console.log(s2Map);

  let i = -1;
  let j = -1;

  let acquiredCount = 0;
  let desiredCount = s2.length;
  while (true) {
    let f1 = false;
    let f2 = false;
    while (i < s1.length && acquiredCount < desiredCount) {
      f1 = true;
      i++;
      if (s1Map[s1[i]] === undefined) {
        s1Map[s1[i]] = 1;
      } else {
        s1Map[s1[i]] += 1;
      }
      if (s1Map[s1[i]] <= (s2Map[s1[i]] || 0)) {
        acquiredCount++;
      }
    }

    while (j < i && acquiredCount === desiredCount) {
      f2 = true;
      let potentialAns = s1.substring(j + 1, i + 1);
      if (potentialAns.length < ans.length || ans.length === 0) {
        ans = potentialAns;
      }

      j++;
      if (s1Map[s1[j]] === 1) {
        delete s1Map[s1[j]];
      } else {
        s1Map[s1[j]] -= 1;
      }
      if ((s1Map[s1[j]] || 0) < (s2Map[s1[j]] || 0)) {
        acquiredCount--;
      }
    }
    if (f1 === false && f2 === false) {
      break;
    }
  }
  return ans;
}

let s1 = "dbaecbbabdcaafbddcabgba";
let s2 = "abbcdc";
let res = minimumWindowSubstring(s1, s2);
console.log("res", res);
