// given m * n matrix, you can move h1, h2, h3... OR v1, v2, v3... OR d1, d2, d3...

// get all paths to reach from 1,1 to m, n

function getMazePathsWithJumps(r, c, m, n) {
  if (r === m && c === n) {
    return [""];
  }
  let res = [];

  // horizontal moves
  for (let moveSize = 1; moveSize <= n - c; moveSize++) {
    let hPaths = getMazePathsWithJumps(r, c + moveSize, m, n);
    for (let path of hPaths) {
      res.push("h" + moveSize + path);
    }
  }

  // vertical moves
  for (let moveSize = 1; moveSize <= m - r; moveSize++) {
    let vPaths = getMazePathsWithJumps(r + moveSize, c, m, n);
    for (let path of vPaths) {
      res.push("v" + moveSize + path);
    }
  }

  // diagonal moves
  for (let moveSize = 1; moveSize <= m - r && moveSize <= n - c; moveSize++) {
    let dPaths = getMazePathsWithJumps(r + moveSize, c + moveSize, m, n);
    for (let path of dPaths) {
      res.push("d" + moveSize + path);
    }
  }
  return res;
}

getMazePathsWithJumps(1, 1, 3, 3);
// (22) ['h1h1v1v1', 'h1h1v2', 'h1v1h1v1', 'h1v1v1h1', 'h1v1d1', 'h1v2h1', 'h1d1v1', 'h2v1v1', 'h2v2', 'v1h1h1v1', 'v1h1v1h1',
// 'v1h1d1', 'v1h2v1', 'v1v1h1h1', 'v1v1h2', 'v1d1h1', 'v2h1h1', 'v2h2', 'd1h1v1', 'd1v1h1', 'd1d1', 'd2']
