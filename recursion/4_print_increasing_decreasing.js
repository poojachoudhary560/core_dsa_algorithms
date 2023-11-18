// given a no n print decreasing then increasing count
// ip 5
// op 5 4 3 2 1 0 0 1 2 3 4 5
function main(number) {
  printDecreasingIncreaing(number);
}
function printDecreasingIncreaing(no) {
  if (no === 0) return;
  console.log(no); // This line runs before filling the stack with fn (bottom to up)
  printDecreasingIncreaing(no - 1);
  console.log(no); // This line runs after fn gets out of stack (up to down)
}

main(5);
