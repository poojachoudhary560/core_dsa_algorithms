// print abbreviation
// eg: pep
// op: pep, pe1, p1p, p2, 1ep, 1e1, 2p, 3

function printAbbreviation(str) {
  helper("pep", 0, 0, "");
}

function helper(str, index, count, resultSoFar) {
  if (index === str.length) {
    if (count === 0) {
      console.log(resultSoFar);
    } else {
      console.log(resultSoFar + count);
    }
    return;
  }
  // include value
  if (count > 0) {
    helper(str, index + 1, 0, resultSoFar + count + str[index]);
  } else {
    helper(str, index + 1, 0, resultSoFar + str[index]);
  }

  // reject value
  helper(str, index + 1, count + 1, resultSoFar);
}

printAbbreviation();
