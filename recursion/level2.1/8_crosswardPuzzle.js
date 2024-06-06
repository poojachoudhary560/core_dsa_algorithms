// crossward puzzle

// 10 * 10 2d array
// contains + and -
// you can add values on - places
// given words: delhi, iceland, ankara, london
// word should be a perfect fit in any horizontal or vertical place

let arr = [
  ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
  ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
  ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],

  ["+", "-", "-", "-", "-", "-", "+", "+", "+", "+"],
  ["+", "-", "+", "+", "+", "-", "+", "+", "+", "+"],
  ["+", "-", "+", "+", "+", "-", "+", "+", "+", "+"],

  ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
  ["+", "+", "-", "-", "-", "-", "-", "-", "+", "+"],
  ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],

  ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
];

function solveCrossward(arr, words, wordIndex) {
  if (words.length === wordIndex) {
    for (let row of arr) {
      console.log(JSON.stringify(row));
    }
    return;
  }
  let word = words[wordIndex];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === "-" || arr[i][j] === word[0]) {
        if (canPlaceWordHorizontally(arr, i, j, word)) {
          let wePlaced = placeWordHorizontally(arr, i, j, word);
          solveCrossward(arr, words, wordIndex + 1);
          unplaceWordHorizontally(arr, i, j, wePlaced);
        }
        if (canPlaceWordVertically(arr, i, j, word)) {
          let wePlaced = placeWordVertically(arr, i, j, word);
          solveCrossward(arr, words, wordIndex + 1);
          unplaceWordVertically(arr, i, j, wePlaced);
        }
      }
    }
  }
}

function canPlaceWordHorizontally(arr, i, j, word) {
  if (j - 1 >= 0 && arr[i][j - 1] !== "+") {
    return false;
  } else if (
    j + word.length < arr[0].length &&
    arr[i][j + word.length] != "+"
  ) {
    return false;
  }

  for (let jj = 0; jj < word.length; jj++) {
    if (j + jj >= arr[0].length) {
      return false;
    }
    if (arr[i][j + jj] === "-" || arr[i][j + jj] === word[jj]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function canPlaceWordVertically(arr, i, j, word) {
  if (i - 1 >= 0 && arr[i - 1][j] !== "+") {
    return false;
  } else if (i + word.length < arr.length && arr[i + word.length][j] != "+") {
    return false;
  }

  for (let ii = 0; ii < word.length; ii++) {
    if (i + ii >= arr.length) {
      return false;
    }

    if (arr[i + ii][j] === "-" || arr[i + ii][j] === word[ii]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function placeWordHorizontally(arr, i, j, word) {
  let wePlaced = Array(word.length).fill(false);
  for (let jj = 0; jj < word.length; jj++) {
    if (arr[i][j + jj] === "-") {
      arr[i][j + jj] = word[jj];
      wePlaced[jj] = true;
    }
  }
  return wePlaced;
}

function unplaceWordHorizontally(arr, i, j, wePlaced) {
  for (let jj = 0; jj < wePlaced.length; jj++) {
    if (wePlaced[jj] === true) {
      arr[i][j + jj] = "-";
    }
  }
}

function placeWordVertically(arr, i, j, word) {
  let wePlaced = Array(word.length).fill(false);
  for (let ii = 0; ii < word.length; ii++) {
    if (arr[i + ii][j] === "-") {
      arr[i + ii][j] = word[ii];
      wePlaced[ii] = true;
    }
  }
  return wePlaced;
}

function unplaceWordVertically(arr, i, j, wePlaced) {
  for (let ii = 0; ii < wePlaced.length; ii++) {
    if (wePlaced[ii] === true) {
      arr[i + ii][j] = "-";
    }
  }
}
let words = ["delhi", "iceland", "ankara", "london"];
solveCrossward(arr, words, 0);

// ["+","l","+","+","+","+","+","+","+","+"]
// ["+","o","+","+","+","+","+","+","+","+"]
// ["+","n","+","+","+","+","+","+","+","+"]
// ["+","d","e","l","h","i","+","+","+","+"]
// ["+","o","+","+","+","c","+","+","+","+"]
// ["+","n","+","+","+","e","+","+","+","+"]
// ["+","+","+","+","+","l","+","+","+","+"]
// ["+","+","a","n","k","a","r","a","+","+"]
// ["+","+","+","+","+","n","+","+","+","+"]
// ["+","+","+","+","+","d","+","+","+","+"]
