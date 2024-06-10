// 3 boxes 2 distinct items (1,2)
// 3P2 ways = n! / (n-r)! = 3! / 1! = 6

// 1 2 -    2 1 -
// 1 - 2    2 - 1
// - 1 2    - 2 1
// in combination, 3 boxes and 2 similar items(i,i)
// 3C2 ways = n! / (n-r)! r! = 3! / 2! 1! = 3

// i i -
// i - i
// i i -

// 2^n = nC0 + nC1 + nC2 +... + nCn
// 2^3 = 3C0 + 3C1 +3C2 + 3C3

// nPr = nCr * r!

// ii- -->12- , 21-
// i-i -->1-2, 2-1
// -ii -->-12, -21

function solution(
  currentBox,
  totalBoxes,
  items,
  sumSoFar,
  totalItems,
  solutionSoFar
) {
  if (currentBox > totalBoxes) {
    if (sumSoFar === totalItems) {
      console.log(solutionSoFar);
    }
    return;
  }
  for (let i = 0; i < totalItems; i++) {
    if (items[i] === 0) {
      items[i] = 1;
      solution(
        currentBox + 1,
        totalBoxes,
        items,
        sumSoFar + 1,
        totalItems,
        solutionSoFar + (i + 1)
      );
      items[i] = 0;
    }
  }
  solution(
    currentBox + 1,
    totalBoxes,
    items,
    sumSoFar,
    totalItems,
    solutionSoFar + 0
  );
}

function permutations2(totalBoxes, totalItems) {
  let items = Array(totalItems).fill(0);
  solution(1, totalBoxes, items, 0, totalItems, "");
}

permutations2(3, 2);

// 120
// 102
// 210
// 201
// 012
// 021
