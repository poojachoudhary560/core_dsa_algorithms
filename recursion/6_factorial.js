// get factorial
// ip: 5 // op 120

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5);
