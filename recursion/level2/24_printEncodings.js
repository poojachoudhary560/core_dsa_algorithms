// print encodings

function printEncodings(str) {
  helper(str, "");
}

function helper(question, ansSoFar) {
  if (question.length === 0) {
    console.log(ansSoFar);
    return;
  } else if (question.length === 1) {
    let ch = question.charAt(0);
    if (ch === "0") {
      return;
    } else {
      let diff = ch - "0"; // no
      let valOfA = "a".charCodeAt(0);
      let val = String.fromCharCode(valOfA + diff - 1);
      ansSoFar += val;
      console.log(ansSoFar);
    }
  } else {
    let ch = question.charAt(0);
    let newQues = question.substring(1);
    if (ch === "0") {
      return;
    } else {
      let diff = ch - "0"; // no
      let val = String.fromCharCode("a".charCodeAt(0) + diff - 1);
      helper(newQues, ansSoFar + val);
    }

    let first2Char = question.substring(0, 2);
    newQues = question.substring(2);
    let no = parseInt(first2Char);
    if (no <= 26) {
      let val = String.fromCharCode("a".charCodeAt(0) + no - 1);
      helper(newQues, ansSoFar + val);
    }
  }
}

printEncodings("123");
