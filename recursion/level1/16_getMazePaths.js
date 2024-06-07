// given 2 d maze with m rows and n cols,
// you are in cell 0,0 and have to reach cell m-1, n-1
// you can move one step horizontal or vertical
// in how many ways can you reach from 0,0 to m-1, n-1

function getMazePaths(row, col, m, n) {
  let tracker = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));
  let res = [];
  helper(row, col, m, n, "", tracker, res);
  return res;
}

function helper(i, j, m, n, path, tracker, res) {
  if (i < 0 || j < 0 || i === m || j === n || tracker[i][j] === 1) return;
  if (i === m - 1 && j === n - 1) {
    res.push(path);
    return;
  }
  tracker[i][j] = 1;
  helper(i + 1, j, m, n, `${path}h`, tracker, res);
  // helper(i-1, j, m, n, `${path}h`, tracker, res);
  helper(i, j + 1, m, n, `${path}v`, tracker, res);
  // helper(i, j-1, m, n, `${path}v`, tracker, res);
  tracker[i][j] = 0;
}

getMazePaths(0, 0, 3, 3); // (6) ['hhvv', 'hvhv', 'hvvh', 'vhhv', 'vhvh', 'vvhh']

//----------------------

function getMazePaths1(row, col, m, n) {
  if (row === m - 1 && col === n - 1) {
    return [""];
  }
  let hPaths = [];
  let vPaths = [];
  let paths = [];
  if (col < n) {
    hPaths = getMazePaths1(row, col + 1, m, n);
  }
  if (row < m) {
    vPaths = getMazePaths1(row + 1, col, m, n);
  }
  for (let path of hPaths) {
    paths.push("h" + path);
  }

  for (let path of vPaths) {
    paths.push("v" + path);
  }
  return paths;
}

getMazePaths1(0, 0, 3, 3); // (6) ['hhvv', 'hvhv', 'hvvh', 'vhhv', 'vhvh', 'vvhh']

//   0 1
// 0 - -
// 1 - -
