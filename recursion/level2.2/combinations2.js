// combinations2.js

function combinations2(totalboxes, totalIdenticalItems) {
  let ifBoxOccupied = Array(totalboxes).fill(false);
  solution(ifBoxOccupied, 1, totalIdenticalItems, -1);
}

function solution(
  ifBoxOccupied,
  currentItem,
  totalIdenticalItems,
  lastUsedBox
) {
  if (currentItem > totalIdenticalItems) {
    let str = "";
    for (let i = 0; i < ifBoxOccupied.length; i++) {
      if (ifBoxOccupied[i] === true) {
        str += "i";
      } else {
        str += "-";
      }
    }
    console.log(str);

    return;
  }
  for (let b = lastUsedBox + 1; b < ifBoxOccupied.length; b++) {
    if (ifBoxOccupied[b] === false) {
      ifBoxOccupied[b] = true;
      solution(ifBoxOccupied, currentItem + 1, totalIdenticalItems, b);
      ifBoxOccupied[b] = false;
    }
  }
}

combinations2(5, 3);

// iii--
// ii-i-
// ii--i
// i-ii-
// i-i-i
// i--ii
// -iii-
// -ii-i
// -i-ii
// --iii
