// rotate an array by given digits
// a b c d e
// c b a e d
// d e a b c

function reverseAr(ar, i, j) {
  let start = i;
  let end = j;
  while (start < end) {
    let temp = ar[start];
    ar[start] = ar[end];
    ar[end] = temp;
    start++;
    end--;
  }
}
function rotateAr(arr, k) {
  k = k % arr.length;
  if (k < 0) {
    k = k + arr.length;
  }

  reverseAr(arr, 0, arr.length - k - 1);

  reverseAr(arr, arr.length - k, arr.length - 1);

  reverseAr(arr, 0, arr.length - 1);
  console.log(arr);
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
rotateAr(arr, k);
