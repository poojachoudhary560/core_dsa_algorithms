// given 4*4 board
// place 4 queens
// calculate and print the combinations in which n queens can be placed on n*n chessboard

function queenCombinations(n) {
  helper(0, n, 0, 0, "");
}

function helper(currentQueenCount, totalQueenCount, row, col, ansSoFar) {
  if (row === totalQueenCount) {
    if (currentQueenCount === totalQueenCount) {
      console.log(ansSoFar);
    }
    return;
  }
  let nr = 0;
  let nc = 0;

  let yesAnsSoFar = "";
  let noAnsSoFar = "";
  if (col === totalQueenCount - 1) {
    nr = row + 1;
    nc = 0;
    yesAnsSoFar = ansSoFar + "q\n";
    noAnsSoFar = ansSoFar + "-\n";
  } else {
    nr = row;
    nc = col + 1;
    yesAnsSoFar = ansSoFar + "q";
    noAnsSoFar = ansSoFar + "-";
  }
  helper(currentQueenCount + 1, totalQueenCount, nr, nc, yesAnsSoFar);
  helper(currentQueenCount + 0, totalQueenCount, nr, nc, noAnsSoFar);
}

queenCombinations(4);
