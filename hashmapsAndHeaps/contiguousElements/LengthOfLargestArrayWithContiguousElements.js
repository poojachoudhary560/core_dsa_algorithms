// arr = [9, 2, 7, 5, 6, 23, 24, 22, 23, 19, 17, 16, 18, 39, 0]
// i-j === max-min

function lengthOfLargestArrayWithContiguousElements(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let max = arr[i];
    let set = new Set();
    set.add(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (set.has(arr[j])) {
        break;
      }
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      set.add(arr[j]);
      if (max - min === j - i) {
        console.log(j, " ", i);
        let len = j - i + 1;
        if (len > ans) {
          ans = len;
        }
      }
    }
  }
  return ans;
}

let arr = [9, 2, 7, 5, 6, 23, 24, 22, 23, 19, 17, 16, 18, 39, 0];
let res = lengthOfLargestArrayWithContiguousElements(arr);
console.log("res", res);
