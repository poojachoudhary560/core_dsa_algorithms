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
function getKeyPadCombination(str) {
  if (str.length === 0) {
    return [""];
  }
  // 678
  let firstChar = str.charAt(0); // 6
  let restStr = str.substring(1); // 78

  let ar = getKeyPadCombination(restStr);
  let res = [];
  let codesList = codes[firstChar]; // pqrs
  for (let i = 0; i < codesList.length; i++) {
    let charCode = codesList[i];
    for (let j = 0; j < ar.length; j++) {
      res.push(charCode + ar[j]);
    }
  }
  return res;
}

getKeyPadCombination("678");

//-------------

// let codes = [".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"];

function getKeyPadCombo(str) {
  let ans = helper(str, 0);
  console.log("---", ans);
}

function helper(str, index) {
  if (str.length === index) {
    return [""];
  }
  let no = str[index];
  let code = codes[no];

  let ans = helper(str, index + 1);
  let res = [];
  for (let i = 0; i < code.length; i++) {
    for (let j = 0; j < ans.length; j++) {
      res.push(ans[j] + code[i]);
    }
  }
  return res;
}

getKeyPadCombo("567");
