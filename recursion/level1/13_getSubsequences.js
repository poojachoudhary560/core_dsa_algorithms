// get all subsequence of abc
// count of all subsequence for a str of length n -> 2 ^ n
// subsquence of abc = [---, --c, -b-, -bc, a--, a-c, ab-, abc];

// substring of abc [a, ab, abc, b, bc, c]
// count of substrings for a str of length n -> n(n+1) / 2

// : bc -> [--, -c, b-, bc];
// : abc -> [---, --c, -b-, -bc, a--, a-c, ab-, abc];

function getStrSubsequence(str) {
  if (str.length === 0) {
    return [""];
  }
  let firstChar = str.charAt(0); // a
  let restStr = str.substring(1); // bc

  let arr = getStrSubsequence(restStr); // [--, -c, b-, bc];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push("" + arr[i]);
    res.push(firstChar + arr[i]);
  }
  return res;
}

getStrSubsequence("abc");
