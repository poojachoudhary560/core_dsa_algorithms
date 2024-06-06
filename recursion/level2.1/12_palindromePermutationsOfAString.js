// given str
// find permutations that are palindromic in nature for a given str
// ip: aaabb
// op: ababa baaab

function palindromicPermutationsOfaString(str) {
  // create hash map
  let strMap = new Map();
  for (let i of str) {
    if (strMap.has(i)) {
      strMap.set(i, strMap.get(i) + 1);
    } else {
      strMap.set(i, 1);
    }
  }
  console.log(strMap);

  let oddChar = null;
  let oddCount = 0;
  let len = 0;
  for (let i of strMap) {
    let freq = i[1];
    if (freq % 2 === 1) {
      oddChar = i[0];
      oddCount += 1;
    }
    strMap.set(i[0], Math.floor(freq / 2));
    len += Math.floor(freq / 2);
  }
  console.log("strMAp", strMap, "len", len);
  if (oddCount > 1) {
    console.log("not possible");
    return;
  }
  generatePermutations(1, len, strMap, oddChar, "");
}

function generatePermutations(
  currentSpot,
  totalSpot,
  freqMap,
  oddChar,
  ansSoFar
) {
  if (currentSpot > totalSpot) {
    // console.log(ans + freqMap);
    let rev = "";
    for (let i = ansSoFar.length - 1; i >= 0; i--) {
      rev += ansSoFar[i];
    }
    let res = ansSoFar;
    if (oddChar !== null) {
      res += oddChar;
    }
    res += rev;
    console.log("res", res);
    return;
  }
  for (let i of freqMap) {
    if (i[1] > 0) {
      freqMap.set(i[0], i[1] - 1);
      generatePermutations(
        currentSpot + 1,
        totalSpot,
        freqMap,
        oddChar,
        ansSoFar + i[0]
      );
      freqMap.set(i[0], i[1]);
    }
  }
}

palindromicPermutationsOfaString("aaabb"); // ababa baaab

// given str abaaba
// (a)(b)(a)(a)(b)(a)
// (aba)(aba)
// (a)(baab)(a)
// (aba)(a)(b)(a)
// (a)(b)(aa)(b)(a)
