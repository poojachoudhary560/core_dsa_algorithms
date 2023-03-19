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

  find(val) {
    if (this.root === null) return null;
    let current = this.root;
    while (current) {
      if (current.val > val) {
        current = current.left;
      } else if (current.val < val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
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

bst.find(8);
