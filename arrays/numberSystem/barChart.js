// bar chart
// a bar chart of asteriks representing value of arr a
// let arr= [3, 1, 0, 7, 5]

//       *
//       *
//       *
//       * *
//       * *
// *     * *
// *     * *
// * * - * *

function barchart(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let floor = max; floor >= 1; floor--) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= floor) {
        // console.log("* ");
        str += "* ";
      } else {
        // console.log("  ");
        str += "  ";
      }
    }

    console.log(floor, str);
  }
}

let arr = [3, 1, 0, 7, 5];
barchart(arr);
