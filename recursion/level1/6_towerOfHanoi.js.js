// tower of hanoi using recursion
// towers are 10 11 12 and discs are 1 2 and 3
// 1 is the smallest disc and 3 is largest
// toh will move discs from 10 to 11 using 12
// print op as below
// 1[10 -> 11]
// 2[10 -> 12]
// 1[11 -> 12]
// 3[10 -> 11]
// 1[12 -> 10]
// 2[12 -> 11]
// 1[10 -> 11]

function towerOfHanoi(noOfDiscs, tower1, tower2, tower3) {
  if (noOfDiscs === 0) return;
  towerOfHanoi(noOfDiscs - 1, tower1, tower3, tower2); // will print the instructions to move first 2 discs from tower1 to tower 3 using tower 2
  console.log(noOfDiscs + "[ " + tower1 + " -> " + tower2 + " ]");
  towerOfHanoi(noOfDiscs - 1, tower3, tower2, tower1);
}

towerOfHanoi(3, 10, 11, 12);
