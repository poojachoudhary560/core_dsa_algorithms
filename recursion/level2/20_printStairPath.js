function printStairPath(n) {
  helper(n, "");
}

function helper(n, path) {
  if (n < 0) return;
  if (n === 0) {
    console.log(path);
    return;
  }
  helper(n - 1, path + "1");
  helper(n - 2, path + "2");
  helper(n - 3, path + "3");
}

printStairPath(3); // 111, 12, 21, 3

// Time Complexity: O(2^n) , because at each stair there are two choices and there are total of n stairs.
// Auxiliary Space: O(n), because of recursive stack space.
