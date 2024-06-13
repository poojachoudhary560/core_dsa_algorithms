// merge two sorted arrays

function mergeTwoSortedArrays(a1, a2) {
  let ans = Array(a1.length + a2.length);

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      ans[k] = a1[i];
      i++;
      k++;
    } else {
      ans[k] = a2[j];
      j++;
      k++;
    }
  }

  while (i < a1.length) {
    ans[k] = a1[i];
    i++;
    k++;
  }

  while (j < a2.length) {
    ans[k] = a2[j];
    j++;
    k++;
  }
  return ans;
}

let a1 = [2, 5, 12, 18, 20];
let a2 = [7, 9, 11, 15, 25];
let res = mergeTwoSortedArrays(a1, a2);
console.log("res", res);
