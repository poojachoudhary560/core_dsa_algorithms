// subarrays of arrays: [a, b, c]
// [a], [a, b], [a,b,c], [b], [b,c], [c]

function subArraysOfArray(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let res = [];
      for (let k = i; k <= j; k++) {
        res.push(arr[k]);
      }
      ans.push(res);
    }
  }
  console.log(ans);
}

let arr = ["a", "b", "c"];
subArraysOfArray(arr);
