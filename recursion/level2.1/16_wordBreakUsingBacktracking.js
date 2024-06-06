// given words:
// micro soft hi ring hiring microsoft
// str: microsofthiring
// Using the given words, in how many ways we can break the given str
//op:
// micro soft hi ring
// microsoft hi ring
// micro soft hiring
// microsoft hiring

function wordBreakUsingBacktracking(sentence, dict) {
  let dictSet = new Set();
  for (let i of dict) {
    dictSet.add(i);
  }
  console.log(sentence, dictSet);
  solution(sentence, "", dictSet);
}

function solution(sentence, ans, dictSet) {
  if (sentence.length === 0) {
    console.log(ans);
    return;
  }
  for (let i = 0; i < sentence.length; i++) {
    let left = sentence.substring(0, i + 1);
    if (dictSet.has(left)) {
      let right = sentence.substring(i + 1);
      solution(right, ans + left + " ", dictSet);
    }
  }
}
let dict = ["micro", "soft", "hi", "ring", "hiring", "microsoft"];
wordBreakUsingBacktracking("microsofthiring", dict);
