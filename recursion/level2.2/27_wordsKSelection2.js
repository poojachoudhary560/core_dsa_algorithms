// let str ="aabbbccdde";
// select 3 distinct characters from this string without repetition

let str = "aabbbccdde";

function wordsKSelection2(str, k) {
  let uniqueSet = new Set();
  let uniqueStr = "";

  for (let i of str) {
    if (uniqueSet.has(i) === false) {
      uniqueSet.add(i);
      uniqueStr += i;
    }
  }
  helper(uniqueStr, 0, k, -1, "");
}

function helper(
  uniqueStr,
  currentSelectedItem,
  k,
  lastTraversedIndex,
  ansSoFar
) {
  if (currentSelectedItem === k) {
    console.log(ansSoFar);
    return;
  }
  for (let i = lastTraversedIndex + 1; i < uniqueStr.length; i++) {
    helper(uniqueStr, currentSelectedItem + 1, k, i, ansSoFar + uniqueStr[i]);
  }
}

wordsKSelection2(str, 3);
