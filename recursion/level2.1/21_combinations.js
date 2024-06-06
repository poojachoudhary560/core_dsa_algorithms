// n boxes and r identical items
function combinations(boxes, identicalItems) {
  solution(boxes, identicalItems, currentBox, solutionSoFar, ansSoFar);
}

function solution(boxes, identicalItems, currentBox, solutionSoFar, ansSoFar) {
  if (currentBox > boxes) {
    if (solutionSoFar === identicalItems) {
      console.log(ansSoFar);
    }
    return;
  }
  solution(
    boxes,
    identicalItems,
    currentBox + 1,
    solutionSoFar,
    ansSoFar + "-"
  );
  solution(
    boxes,
    identicalItems,
    currentBox + 1,
    solutionSoFar + 1,
    ansSoFar + "i"
  );
}

combinations(5, 2);

// ---ii
//  --i-i
//  --ii-
//  -i--i
//  -i-i-
//  -ii--
//  i---i
//  i--i-
//  i-i--
//  ii---
