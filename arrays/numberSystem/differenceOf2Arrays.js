// sub 2 arrays
// let a1 = [3,3,3,3,3];
// let a2 = [2,3,6,4,2];

// find a1-a2 // 09691

function differnceOf2Arrays(a1, a2) {
  let res = Array(a1.length); // a1> a2
  let i = a1.length - 1;
  let j = a2.length - 1;
  let k = a1.length - 1;
  let c = 0;
  while (k >= 0) {
    let a1I = i >= 0 ? a1[i] : 0;
    let a2J = j >= 0 ? a2[j] : 0;
    if (a1I + c >= a2J) {
      res[k] = a1I + c - a2J;
      c = 0;
    } else {
      res[k] = a1I + c + 10 - a2J;
      c = -1;
    }
    i--;
    j--;
    k--;
  }
  console.log("res", res);
}

let a1 = [3, 3, 3, 3, 3];
let a2 = [2, 3, 6, 4, 2];
differnceOf2Arrays(a1, a2);
