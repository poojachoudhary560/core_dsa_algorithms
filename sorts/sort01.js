// sort 01
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1];

function sort01ByPartitioning(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    }
  }

  console.log(arr);
}

let arr = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1]; // op: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
sort01ByPartitioning(arr);
