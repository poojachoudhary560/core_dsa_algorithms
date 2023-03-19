// Special stack DS
// push() pop() top() getMin()
// 5, 2, -1, 10, 5

class StackUsingArr {
  constructor() {
    this.minStack = [];
    this.items = [];
  }

  push(el) {
    this.items.push(el);
    let lastMin =
      this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : el;

    this.minStack.push(Math.min(el, lastMin));
  }
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    this.minStack.pop();
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  getMin() {
    console.log(this.minStack);
    return this.minStack[this.minStack.length - 1];
  }
}

var stack = new StackUsingArr();
stack.push(5);
stack.push(2);
stack.push(-1);
stack.push(10);
stack.push(5);
stack.pop();
stack.pop();
// stack.pop();
stack.getMin();

// Time complexity
// push O(1)
// pop O(1)
// top O(1)
// getMin O(1)

// Space Complexity
// O(n)

// if stack is already full of elements, use min and pop element from stack to fin mina nd again push items in stack
