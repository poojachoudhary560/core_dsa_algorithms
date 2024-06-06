// given 3 strings
// 'send', 'more' and 'money'
// we need to map 'send' and 'more' to characters from 0 to 9
// so that we get result as 'money'
// no character can be mapped to more than 1 digit
// and no digit can be mapped to more than 1 character
// print all mappings in increasing order of characters

function cryptarithmaticPuzzle(str1, str2, result) {
  let uniqueObj = {};
  let uniqueStr = "";
  uniqueStr = getUniqueChars(str1, uniqueObj, uniqueStr);
  uniqueStr = getUniqueChars(str2, uniqueObj, uniqueStr);
  uniqueStr = getUniqueChars(result, uniqueObj, uniqueStr);
  console.log(uniqueObj, uniqueStr);
  let usedNumbers = Array(10).fill(false);
  solution(uniqueStr, 0, uniqueObj, usedNumbers, str1, str2, result);
}

function getUniqueChars(str, obj, uniqueStr) {
  for (let i of str) {
    if (obj[i] === undefined) {
      obj[i] = -1;
      uniqueStr += i;
    }
  }
  return uniqueStr;
}

function solution(
  uniqueStr,
  index,
  uniqueObj,
  usedNumbers,
  str1,
  str2,
  result
) {
  if (index === uniqueStr.length) {
    let num1 = getNum(str1, uniqueObj);
    let num2 = getNum(str2, uniqueObj);
    let num3 = getNum(result, uniqueObj);
    if (num1 + num2 === num3) {
      let res = "";
      for (let i = 0; i < 26; i++) {
        let chCode = "a".charCodeAt(0) + i;
        let ch = String.fromCharCode(chCode);
        if (uniqueObj[ch]) {
          // console.log(ch + '-' + uniqueObj[ch]);
          res += ch + "-" + uniqueObj[ch] + "  ";
        }
      }
      console.log(res);
    }
    return;
  }
  let ch = uniqueStr[index];
  for (let num = 0; num <= 9; num++) {
    if (usedNumbers[num] === false) {
      uniqueObj[ch] = num;
      usedNumbers[num] = true;
      solution(
        uniqueStr,
        index + 1,
        uniqueObj,
        usedNumbers,
        str1,
        str2,
        result
      );
      usedNumbers[num] = false;
      uniqueObj[ch] = -1;
    }
  }
}

function getNum(str, obj) {
  let no = "";
  for (let i of str) {
    no += obj[i];
  }
  return parseInt(no);
}
cryptarithmaticPuzzle("send", "more", "money");

// d-7  e-8  n-1  o-3  r-6  s-2  y-5
// d-9  e-8  n-1  o-3  r-6  s-2  y-7
// d-2  e-7  n-1  o-4  r-6  s-3  y-9
// d-9  e-7  n-1  o-4  r-5  s-3  y-6
// d-1  e-8  n-2  o-4  r-6  s-3  y-9
// d-9  e-8  n-2  o-4  r-5  s-3  y-7
// d-1  e-7  n-3  o-6  r-4  s-5  y-8
// d-2  e-7  n-3  o-6  r-4  s-5  y-9
// d-9  e-8  n-4  o-6  r-3  s-5  y-7
// d-5  e-4  n-1  o-7  r-3  s-6  y-9
// d-9  e-4  n-1  o-7  r-2  s-6  y-3
// d-4  e-5  n-2  o-7  r-3  s-6  y-9
// d-1  e-8  n-5  o-7  r-3  s-6  y-9
// d-3  e-8  n-5  o-7  r-2  s-6  y-1
// d-6  e-3  n-1  o-8  r-2  s-7  y-9
// d-9  e-4  n-2  o-8  r-1  s-7  y-3
// d-1  e-5  n-3  o-8  r-2  s-7  y-6
// d-4  e-5  n-3  o-8  r-2  s-7  y-9
// d-9  e-5  n-3  o-8  r-1  s-7  y-4
// d-3  e-6  n-4  o-8  r-2  s-7  y-9
// d-9  e-6  n-4  o-8  r-1  s-7  y-5
// d-4  e-3  n-2  o-9  r-1  s-8  y-7
// d-2  e-4  n-3  o-9  r-1  s-8  y-6
// d-2  e-5  n-4  o-9  r-1  s-8  y-7
// d-7  e-5  m-1  n-6  r-8  s-9  y-2
