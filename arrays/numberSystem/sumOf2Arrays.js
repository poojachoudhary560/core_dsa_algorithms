// sum of 2 arrays
// let a1 = [9, 3, 4, 6, 8];
// let a2 = [1, 9, 8, 8];

function sumOf2Arrays(a1, a2) {
  let res = Array(a1.length > a2.length ? a1.length : a2.length);
  let i = a1.length - 1;
  let j = a2.length - 1;
  let k = res.length - 1;
  let c = 0;
  while (k >= 0) {
    let ans = c;
    if (i >= 0) {
      ans += a1[i];
    }

    if (j >= 0) {
      ans += a2[j];
    }

    c = Math.floor(ans / 10);
    res[k] = ans % 10;
    i--;
    j--;
    k--;
  }
  let val = "";
  if (c != 0) {
    val += c;
  }
  for (let i of res) {
    val += i;
  }

  console.log("val", val);
}

let a1 = [9, 3, 4, 6, 8];
let a2 = [1, 9, 8, 8]; // 95456
sumOf2Arrays(a1, a2);
