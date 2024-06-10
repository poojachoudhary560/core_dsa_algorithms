// given n*n  chessboard and n queens
// place n distinct queens n1, n2, n3, n4 in n by n chessboard

function queensPermutations(n) {
  let chess = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  console.log(chess);
  helper(0, n, chess);
}

function helper(currentQueenCount, totalQueenCount, chess) {
  if (currentQueenCount === totalQueenCount) {
    for (let i = 0; i < chess.length; i++) {
      let str = "";
      for (let j = 0; j < chess[0].length; j++) {
        if (chess[i][j] === 0) {
          str += "- ";
        } else {
          str += "q" + chess[i][j] + " ";
        }
      }
      console.log(str);
    }
    console.log("---------------");
    return;
  }
  for (let i = 0; i < chess.length; i++) {
    for (let j = 0; j < chess[0].length; j++) {
      if (chess[i][j] === 0) {
        chess[i][j] = currentQueenCount + 1;
        helper(currentQueenCount + 1, totalQueenCount, chess);
        chess[i][j] = 0;
      }
    }
  }
}

queensPermutations(4);
