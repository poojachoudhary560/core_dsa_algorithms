function booleanParenthesization(str1, str2) {
  let n = str1.length;
  let dpt = Array(n + 1)
    .fill(null)
    .map(() => Array(n + 1));
  let dpf = Array(n + 1)
    .fill(null)
    .map(() => Array(n + 1));

  for (let g = 0; g < n; g++) {
    for (let i = 0, j = g; j < n; j++) {
      if (g === 0) {
        let ch = str1.charAt(i);
        if (ch === "T") {
          dpt[i][j] = 1;
          dpf[i][j] = 0;
        } else {
          dpt[i][j] = 0;
          dpf[i][j] = 1;
        }
      } else {
        for (let k = i; k < j; k++) {
          let operator = str2.charAt(k);
          let ltc = dpt[i][k];
          let rtc = dpt[k + 1][j];
          let lfc = dpf[i][k];
          let rfc = dpf[k + 1][j];

          if (operator === "&") {
            dpt[i][j] = ltc * rtc;
            dpf[i][j] = lfc * rtc + ltc * rfc + lfc * rfc;
          } else if (operator === "|") {
            dpt[i][j] = ltc * rtc + ltc * rfc + lfc * rtc;
            dpf[i][j] = lfc * rfc;
          } else {
            // op ^
            dpt[i][j] = ltc * rfc + rtc * lfc;
            dpf[i][j] = lfc * rfc + ltc * rtc;
          }
        }
      }
    }
  }
  return dpt[0][n - 1];
}
