// count of substrings with exactly k unique/distinct characters
// let str = "aabcbcdbca";

// let str = "abcabdabbcfa"; k =3
// op: abc, abca, abcab
// bca, bcab
// cab
// abd, abda, abdab, abdabb
// bda, bdab, bdabb
//dab, dabb
// abbc
// bbcf, bcf
// cfa

// create one big hashmap (has k unique char) and one small hashmap (less than k-1 char)

function removeChar(map, ch) {
  if (map.get(ch) === 1) {
    map.delete(ch);
  } else {
    map.set(ch, map.get(ch) - 1);
  }
}
function countSubstringsWithKDistinct(str, k) {
  let ans = 0;
  let iSmall = -1;
  let iBig = -1;
  let j = -1;
  let mapSmall = new Map();
  let mapBig = new Map();
  while (true) {
    let f1 = false;
    let f2 = false;
    let f3 = false;
    while (iBig < str.length - 1) {
      f1 = true;
      iBig++;
      if (mapBig.has(str[iBig])) {
        mapBig.set(str[iBig], mapBig.get(str[iBig]) + 1);
      } else {
        mapBig.set(str[iBig], 1);
      }
      if (mapBig.size === k + 1) {
        removeChar(mapBig, str[iBig]);
        iBig--;
        break;
      }
    }

    while (iSmall < iBig) {
      f2 = true;
      iSmall++;
      if (mapSmall.has(str[iSmall])) {
        mapSmall.set(str[iSmall], mapSmall.get(str[iSmall]) + 1);
      } else {
        mapSmall.set(str[iSmall], 1);
      }
      if (mapSmall.size === k) {
        removeChar(mapSmall, str[iSmall]);
        iSmall--;
        break;
      }
    }
    console.log(mapBig, mapSmall);
    while (j < iSmall) {
      f3 = true;
      if (mapBig.size === k && mapSmall.size === k - 1) {
        ans += iBig - iSmall;
      }
      j++;
      removeChar(mapBig, str[j]);
      removeChar(mapSmall, str[j]);
      if (mapBig.size < k || mapSmall.size < k - 1) {
        break;
      }
    }
    console.log(".........", mapBig, mapSmall);
    if (f1 === false && f2 === false && f3 === false) {
      break;
    }
  }
  return ans;
}

let str = "abcabdabbcfa";
let res = countSubstringsWithKDistinct(str, 3);
console.log("res", res);
