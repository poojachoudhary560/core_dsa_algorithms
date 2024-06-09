// space complexity (n+1)levels * n characters at each level
// The time complexity of this approach is O(2^n), where n is the length of the given string.
// This is because, for a string of length n, we are generating a total of 2^n subsequences.

// Time Complexity: O(2^n)

// Space Complexity: O(n), recursion stack.

function printSubsequence(str) {
  helper(str, "");
}

function helper(ques, ans) {
  if (ques.length === 0) {
    console.log(ans);
    return;
  }
  let firstChar = ques.charAt(0);
  let restOfStr = ques.substring(1);
  helper(restOfStr, ans + "");
  helper(restOfStr, ans + firstChar);
}

printSubsequence("abc");
