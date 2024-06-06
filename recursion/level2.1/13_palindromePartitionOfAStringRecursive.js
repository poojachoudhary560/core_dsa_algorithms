// code hereh
function palindromePartitionOfAStringRecursive(str) {
  solution(str, "");
}

function solution(str, ansSoFar) {
  if (str.length === 0) {
    console.log(ansSoFar);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    let prefix = str.substring(0, i + 1);
    let restOfString = str.substring(i + 1);
    if (isPalindrome(prefix)) {
      solution(restOfString, ansSoFar + "(" + prefix + ")");
    }
  }
}

function isPalindrome(str) {
  let li = 0;
  let ri = str.length - 1;
  while (li < ri) {
    let left = str[li];
    let right = str[ri];
    if (left !== right) {
      return false;
    }
    li++;
    ri--;
  }
  return true;
}

palindromePartitionOfAStringRecursive("abaaba");

// (a)(b)(a)(a)(b)(a)
// (a)(b)(a)(aba)
// (a)(b)(aa)(b)(a)
// (a)(baab)(a)
// (aba)(a)(b)(a)
// (aba)(aba)
// (abaaba)
