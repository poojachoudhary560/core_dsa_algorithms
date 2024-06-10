// abcabc
// create all words of length 2 having distinct characters
// op: ab ba ac ca bc cb
// ques is same as 3 box and 2 distinct items
// -12 -21, 12- 21-, 1-2, 2-1

function kLengthWords(str, k) {
  let uniqueStr = "";
  let uniqueSet = new Set();
  for (let i of str) {
    if (uniqueSet.has(i) === false) {
      uniqueSet.add(i);
      uniqueStr += i;
    }
  }
  let usedSpots = Array(k).fill("");
  console.log(uniqueSet, uniqueStr, usedSpots);
  helper(uniqueStr, 0, 0, k, usedSpots);
}

function helper(
  uniqueStr,
  index,
  currentDistinctCount,
  requiredDistinctCount,
  usedSpots
) {
  if (index === uniqueStr.length) {
    if (currentDistinctCount === requiredDistinctCount) {
      console.log(usedSpots);
    }
    return;
  }
  let currentChar = uniqueStr[index];
  for (let i = 0; i < usedSpots.length; i++) {
    if (usedSpots[i] === "") {
      usedSpots[i] = currentChar;
      helper(
        uniqueStr,
        index + 1,
        currentDistinctCount + 1,
        requiredDistinctCount,
        usedSpots
      );
      usedSpots[i] = "";
    }
  }
  helper(
    uniqueStr,
    index + 1,
    currentDistinctCount,
    requiredDistinctCount,
    usedSpots
  );
}

kLengthWords("abcabc", 2);
