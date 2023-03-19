class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
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
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let prevNode = current;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    this.tail = prevNode;
    prevNode.next = null;
    this.length--;

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
    if (!this.head) return undefined;
    let prevHead = this.head;
    this.head = prevHead.next;
    prevHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let getNode = this.get(index);
    if (getNode) {
      getNode.val = val;
    }
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return this;
  }

  remove(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    let removedEl;
    if (index === 0) {
      removedEl = this.shift();
    } else if (index === this.length - 1) {
      removedEl = this.pop();
    } else {
      let prevNode = this.get(index - 1);
      removedEl = prevNode.next;
      prevNode.next = removedEl.next;
      removedEl.next = null;
      this.length--;
    }
    return removedEl;
  }

  traverse() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

let sll = new SLL();
sll.push(22);
sll.push(20);
sll.push(23);
sll.push(27);
