// .. largest number possible after atmost K swaps
// ip: 1234567
// op: 7654321

function swap(str, i, j) {
  let ith = str[i];
  let jth = str[j];

  let left = str.substring(0, i);
  let mid = str.substring(i + 1, j);
  let right = str.substring(j + 1);
  return left + jth + mid + ith + right;
}

let max = "0";

function findMax(str, k) {
  if (parseInt(str) > parseInt(max)) {
    max = str;
  }
  if (k === 0) {
    return;
  }
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (parseInt(str[j]) > parseInt(str[i])) {
        str = swap(str, i, j);
        findMax(str, k - 1);
        str = swap(str, i, j);
      }
    }
  }
}

findMax("1234567", 4);
console.log(max);
