// print in lexicographical order using recursion

// eg: 1 10 100 1000 101 102 103 104 105 106 107 108 109 11 110 111 112 113 114 115 116 117 118 119 12 120
// 121.. 129 13 130 131..139
// ...
// 191 .. 199
// 2, 20, 200, 201..209,
// 21, 210, 211..219
// ..
// 29, 290, 291..299
// 3

function lexicographicalNumbers(numbers) {
  for (let i = 1; i <= 9; i++) {
    dfs(numbers, i);
  }
}

function dfs(numbers, i) {
  if (i > numbers) {
    return;
  }
  console.log(i);
  for (let j = 0; j < 10; j++) {
    dfs(numbers, 10 * i + j);
  }
}

lexicographicalNumbers(50);
