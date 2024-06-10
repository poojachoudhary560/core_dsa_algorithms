let str = "aabbbccdde";
// select 3 distinct characters from this string without repetition

function wordsKSelection(str, k) {
  let uniqueSet = new Set();
  let uniqueStr = "";
  for (let i of str) {
    if (uniqueSet.has(i) === false) {
      uniqueSet.add(i);
      uniqueStr += i;
    }
  }
  console.log(uniqueStr);
  helper(uniqueStr, 0, 0, k, "");
}

function helper(uniqueStr, currentIndex, countSoFar, k, ansSoFar) {
  if (currentIndex === uniqueStr.length) {
    if (countSoFar === k) {
      console.log(ansSoFar);
    }
    return;
  }
  helper(
    uniqueStr,
    currentIndex + 1,
    countSoFar + 1,
    k,
    ansSoFar + uniqueStr[currentIndex]
  );
  helper(uniqueStr, currentIndex + 1, countSoFar + 0, k, ansSoFar + "");
}

wordsKSelection(str, 3);
