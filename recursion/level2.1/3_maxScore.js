// 4
// dog cat dad good

// 9
// a b c d d d g o o
// 1 0 9 5 0 0 3 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0

function maxScore() {
  let score = [
    1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];
  let ques = ["dog", "cat", "dad", "good"];
  let freq = ["a", "b", "c", "d", "d", "d", "g", "o", "o"];
  let freqArr = Array(26).fill(0);
  for (let i of freq) {
    let no = i.charCodeAt(0) - "a".charCodeAt(0);
    freqArr[no] += 1;
  }
  return helper(ques, freqArr, score, 0);
}

function helper(ques, freqArr, score, index) {
  if (index === ques.length) {
    return 0;
  }
  // word not included
  let sno = 0 + helper(ques, freqArr, score, index + 1);
  // word to include
  let sWord = 0;
  let word = ques[index];
  let flag = true;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (freqArr[ch.charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      flag = false;
    }
    freqArr[ch.charCodeAt(0) - "a".charCodeAt(0)] -= 1;
    sWord += score[ch.charCodeAt(0) - "a".charCodeAt(0)];
  }

  let syes = 0;
  if (flag) {
    syes = sWord + helper(ques, freqArr, score, index + 1);
  }

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    freqArr[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  return Math.max(sno, syes);
}

maxScore(); // 23
