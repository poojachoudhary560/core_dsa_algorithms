// smallest substring of a string containing all unique characters of itself
// let str = "bbacacdcbbcaadcdca"
// ans: "acdcb"

function minimumWindowSubstring2(str) {
  let uniqueSet = new Set();
  let ans = str;
  for (let i = 0; i < str.length; i++) {
    uniqueSet.add(str[i]);
  }
  let i = -1;
  let j = -1;
  let map = {};
  while (true) {
    let f1 = false;
    let f2 = false;
    while (i < str.length - 1) {
      f1 = true;
      i++;
      if (map[str[i]] === undefined) {
        map[str[i]] = 1;
      } else {
        map[str[i]] += 1;
      }
      console.log(uniqueSet.size, map.size);
      if (uniqueSet.size === Object.keys(map).length) {
        break;
      }
    }

    while (j < i && Object.keys(map).length === uniqueSet.size) {
      f2 = true;
      let len = str.substring(j + 1, i + 1);
      if (len.length < ans.length) {
        ans = len;
      }
      j++;
      if (map[str[j]] === 1) {
        delete map[str[j]];
      } else {
        map[str[j]] -= 1;
      }
    }
    if (f1 === false && f2 === false) {
      break;
    }
  }

  return ans;
}

let str = "bbacacdcbbcaadcdca";

let res = minimumWindowSubstring2(str);
console.log("res", res);
