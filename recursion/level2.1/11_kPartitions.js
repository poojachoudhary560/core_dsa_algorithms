// given n numbers
// partition n numbers into k non-empty sets
// 123 in 2 non empty sets
// op:
// 1 | 23
// 12 | 3
// 13 | 2

// wrong ans
// 1 | 23 --> 23 | 1, 1 | 32, 32 | 1 we just want unique ans not the permutations
// 12 | 3 ---> 21 | 3, 3 | 21, 3 | 12
// 13 | 2 ---> 31 | 2, 2 | 13, 2 | 31

// also note if n < k return 0
// number less than non empty sets eg 3 < 5 --> not possible

// n === k => 1way
// k === 0 || n===0 => 0
// if only one set => 1

function partitionInKSubsets(n, k) {
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(Array());
  }
  // ans[0].push(1)
  // ans[0].pop()
  console.log(ans);
  solution(1, n, k, 0, ans);
}
let counter = 0;

function solution(i, n, k, noOfUsedSets, ans) {
  if (i > n) {
    if (noOfUsedSets === k) {
      counter++;
      console.log(counter + "." + JSON.stringify(ans));
    }
    return;
  }
  for (let j = 0; j < ans.length; j++) {
    if (ans[j].length > 0) {
      ans[j].push(i);

      solution(i + 1, n, k, noOfUsedSets, ans);
      ans[j].pop();
    } else {
      ans[j].push(i);

      solution(i + 1, n, k, noOfUsedSets + 1, ans);
      ans[j].pop();
      break;
    }
  }
}
partitionInKSubsets(4, 3);
// 1.[[1,2],[3],[4]]
// 2.[[1,3],[2],[4]]
// 3.[[1],[2,3],[4]]
// 4.[[1,4],[2],[3]]
// 5.[[1],[2,4],[3]]
// 6.[[1],[2],[3,4]]
