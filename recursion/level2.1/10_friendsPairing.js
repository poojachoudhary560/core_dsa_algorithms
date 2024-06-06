// given n friends, a person can pair or single
// tell all ways in which a person can pair or stay single
// eg
// (1)(2)(3)
// (1)(23)
// (12)(3)
// (13)(2)

let counter = 1;
function friendsPairing(n) {
  let used = Array(n).fill(false);
  helper(1, n, used, "");
}

function helper(element, n, used, ansSoFar) {
  if (element > n) {
    console.log(counter + "." + ansSoFar);
    counter++;
    return;
  }
  if (used[element]) {
    helper(element + 1, n, used, ansSoFar);
  } else {
    used[element] = true;
    helper(element + 1, n, used, ansSoFar + "(" + element + ") ");
    for (let j = element + 1; j <= n; j++) {
      used[j] = true;
      helper(element + 1, n, used, ansSoFar + "(" + element + j + ") ");
      used[j] = false;
    }
    used[element] = false;
  }
}
friendsPairing(3);
