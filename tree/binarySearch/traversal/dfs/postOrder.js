class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  dfsPostorder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return null;
        if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(15);
bst.insert(8);

bst.dfsPostorder();
