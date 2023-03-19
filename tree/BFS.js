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

  // insert function
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return undefined;
        }
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find function
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      console.log(current.val);
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return undefined;
    }
    return current;
  }

  breadthFirstSearch() {
    var data = [],
      queue = [],
      node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      console.log(node.left, "------", node.right);
    }
    return data;
  }

  dfs_preOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let bst = new BinarySearchTree();
bst.insert(15);
bst.insert(11);
bst.insert(13);
bst.insert(14);
bst.insert(1);
bst.insert(16);
