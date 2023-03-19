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

  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let nextNode = prev.next;
      newNode.next = nextNode;
      prev.next = newNode;
      this.length++;
    }
    return this;
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

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = nextNode.next;
    nextNode.next = null;
    this.length--;
    return nextNode;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("world");
list.push("goodbye!");
list.insert(0, "heyyy!!");
list.set(1, "new val");
list.remove(2);
