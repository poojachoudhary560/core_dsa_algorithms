let ar = [
  10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1,
  40, 100, -1, -1, -1,
];
class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class GenericTree {
  constructor() {
    this.root = null;
  }

  // function to make generic tree from array
  makeTreeFromArr() {
    let stack = [];
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] === -1) {
        stack.pop();
      } else {
        let newNode = new Node(ar[i]);
        if (stack.length > 0) {
          stack[stack.length - 1].children.push(newNode);
        } else {
          this.root = newNode;
        }
        stack.push(newNode);
      }
    }
    return this.root;
  }
}

let gt = new GenericTree();
let treeRoot = gt.makeTreeFromArr();
console.log(treeRoot);
