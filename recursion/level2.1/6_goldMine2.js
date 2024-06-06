// gold mine 2
// user can visit cells and collect gold, you cannot visit cell with val 0
// but for cells other than 0 you can visit and collect gold, also go to n, s, w and east to collect
// you cannot visit an already visited cell twice
// what is the max gold you can collect
let arr = [
  [10, 0, 100, 200, 0, 8, 0],
  [20, 0, 0, 0, 0, 6, 0],
  [30, 0, 0, 9, 12, 3, 4],
  [40, 0, 2, 5, 8, 3, 11],
  [0, 0, 0, 0, 0, 9, 0],
  [5, 6, 7, 0, 7, 4, 2],
  [8, 9, 10, 0, 1, 10, 8],
];

function goldMine(arr) {
  let max = 0;
  let visited = Array(arr.length)
    .fill(null)
    .map(() => Array(arr[0].length).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let bag = [];
      collectGold(arr, i, j, bag, visited);
      let sum = 0;
      for (let gold of bag) {
        sum += gold;
      }
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

function collectGold(arr, row, col, bag, visited) {
  if (
    row < 0 ||
    col < 0 ||
    row >= arr.length ||
    col >= arr[0].length ||
    visited[row][col] === 1 ||
    arr[row][col] === 0
  ) {
    return;
  }
  visited[row][col] = 1;
  bag.push(arr[row][col]);
  collectGold(arr, row + 1, col, bag, visited);
  collectGold(arr, row - 1, col, bag, visited);
  collectGold(arr, row, col + 1, bag, visited);
  collectGold(arr, row, col - 1, bag, visited);
}

goldMine(arr); // 300
