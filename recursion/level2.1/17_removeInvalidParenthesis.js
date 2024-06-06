// remove invalid parenthesis
// reomving min no of brackets we have to balance the parenthesis
// ip: ()())()
// op
// (())()
// ()()()

function removeInvalidParenthesis(str) {
  let minToRemove = getMin(str);
  let ans = new Set();
  solution(str, minToRemove, ans);
}

function getMin() {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        stack.push(ch);
      } else if (stack[stack.length - 1] === ")") {
        stack.push(ch);
      } else if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }
  return stack.length;
}

function solution(str, minToRemove, ans) {
  if (minToRemove === 0) {
    let minR = getMin(str);
    if (minR === 0) {
      if (ans.has(str) === false) {
        console.log(str);
        ans.add(str);
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    let left = str.substring(0, i);
    let right = str.substring(i + 1);
    solution(left + right, minToRemove - 1, ans);
  }
}

removeInvalidParenthesis("()())()");

// (())()
// ()()()
