class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    current.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return null;
    let removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("world");
list.push("goodbye!");
list.pop();
list.unshift("pre");
list.shift();
