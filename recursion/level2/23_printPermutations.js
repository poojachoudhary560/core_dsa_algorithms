// print permutations: n!

function printPermutations(str) {
  helper(str, "");
}

function helper(ques, andSoFar) {
  if (ques.length === 0) {
    console.log(andSoFar);
    return;
  }
  for (let i = 0; i < ques.length; i++) {
    let ch = ques.charAt(i);
    let newQues = ques.substring(0, i) + ques.substring(i + 1);
    helper(newQues, andSoFar + ch);
  }
}

printPermutations("abc");
