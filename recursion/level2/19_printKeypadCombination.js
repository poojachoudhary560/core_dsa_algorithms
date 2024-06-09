// print keypad combination

let codes = [
  ".;",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tu",
  "vwx",
  "yz",
];

function printKeyPadCombination(str) {
  helper(str, "");
}

function helper(ques, ans) {
  if (ques.length === 0) {
    console.log(ans);
    return;
  }
  let getFirstChar = ques.charAt(0);
  let restOfStr = ques.substring(1);
  let codesList = codes[getFirstChar - "0"];
  for (let i = 0; i < codesList.length; i++) {
    let option = codesList[i];
    helper(restOfStr, ans + option);
  }
}

printKeyPadCombination("567");

// Time Complexity: O(4^n), where n is the number of digits in the input number.

// Each digit of a number has 3 or 4 alphabets, so it can be said that each digit has 4 alphabets as options.
// If there are n digits then there are 4 options for the first digit and
// for each alphabet of the first digit there are 4 options in the second digit, i.e for every recursion 4 more recursions are called (if it does not match the base case).
// So the time complexity is O(4^n).
// Auxiliary Space: O(n)

// No extra data structure is explicitly used, so one may think there is no extra space required
// But in a recursive function, the space complexity depends on the maximum depth of the recursion tree
// Each function call creates a new stack frame that stores its local variables and parameters
// The recursion tree here has a depth of n, that’s how long a branch can be
// Therefore, complexity will be proportional to n, that is O(n)
