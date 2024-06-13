// sort 0, 1 and 2  by partitioning
// let arr = [1, 1, 2, 2, 0, 1, 2, 2, 1, 0, 1, 2, 0, 2, 1];

function sort012ByPartitioning(arr) {
  let i = 0;
  let j = 0;
  let k = arr.length - 1;

  while (i < k) {
    if (arr[i] === 1) {
      i++;
    } else if (arr[i] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    } else if (arr[i] === 2) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k--;
    }
  }
  console.log(arr);
}

let arr = [1, 1, 2, 2, 0, 1, 2, 2, 1, 0, 1, 2, 0, 2, 1]; // op: [0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
sort012ByPartitioning(arr);
