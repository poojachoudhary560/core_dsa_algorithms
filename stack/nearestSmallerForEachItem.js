// find the nearest smaller element for each element in array
// 1, 6, 4, 10, 2, 5
// -, 1, 1, 4, 1, 2
class FindNearestSmaller {
  constructor() {
    this.arr = [1, 6, 4, 10, 2, 5];
    this.minStack = [];
    this.res = [];
  }
  findInArr() {
    // edge case  .. if stack becomes empty
    /*
    if (this.minStack.length === 0) {
        this.minStack.push(this.arr[0]);
        this.res.push("-");
      } */
    for (let i = 1; i < this.arr.length; i++) {
      if (this.minStack.length === 0) {
        this.minStack.push(this.arr[0]);
        this.res.push("-");
      } else {
        let top = this.minStack[this.minStack.length - 1];
        console.log("this.minStack " + this.minStack + "   " + top);

        // console.log('top: '+ top + ' i: ' + i, ' arr[i]: ' + this.arr[i] + "  res"+ this.res +" minStack "+this.minStack)
        if (this.arr[i] > top) {
          this.res.push(top);
          this.minStack.push(this.arr[i]);
        } else {
          while (top > this.arr[i]) {
            this.minStack.pop();
          }
          top = this.minStack[this.minStack.length - 1];
          this.res.push(top);
          this.minStack.push(this.arr[i]);
        }
        console.log(
          "top: " + top + " i: " + i,
          " arr[i]: " +
            this.arr[i] +
            "  res" +
            this.res +
            " minStack " +
            this.minStack
        );
      }
    }
  }
}

let st = new FindNearestSmaller();
st.findInArr();
