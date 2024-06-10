// abcabc
// create all words of length 2 having distinct characters
// op: ab ba ac ca bc cb
// ques is same as 3 box and 2 distinct items
// -12 -21, 12- 21-, 1-2, 2-1

function kLengthWords2(str, k) {
  let uniqueSet = new Set();
  let uniqueStr = "";
  for (let i of str) {
    if (uniqueSet.has(i) === false) {
      uniqueSet.add(i);
      uniqueStr += i;
    }
  }
  console.log(uniqueStr, uniqueSet);
  let usedSet = new Set();
  helper(uniqueStr, 0, k, usedSet, "");
}

function helper(
  uniqueStr,
  currentDistinctCount,
  requiredDistinctCount,
  usedSet,
  ansSoFar
) {
  if (currentDistinctCount === requiredDistinctCount) {
    console.log(ansSoFar);
    return;
  }
  for (let i = 0; i < uniqueStr.length; i++) {
    let currentChar = uniqueStr[i];
    if (usedSet.has(currentChar) === false) {
      usedSet.add(currentChar);
      helper(
        uniqueStr,
        currentDistinctCount + 1,
        requiredDistinctCount,
        usedSet,
        ansSoFar + currentChar
      );
      usedSet.delete(currentChar);
    }
  }
}

kLengthWords2("abcabc", 2);
