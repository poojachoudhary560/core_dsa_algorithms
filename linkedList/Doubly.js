class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      this.tail = newTail;
      newTail.next = null;
      currentTail.prev = null;
      this.length--;
    }
    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
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

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
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
      let nextNode = prevNode.next;
      newNode.next = nextNode;
      newNode.prev = prevNode;
      nextNode.prev = newNode;
      prevNode.next = newNode;
      this.length++;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(index - 1);
      let removedEl = prevNode.next;
      let nextNode = removedEl.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removedEl.prev = null;
      removedEl.next = null;
      this.length--;
      return removedEl;
    }
  }
}

let dll = new DLL();
dll.push(22);
dll.push(2);
dll.push(12);
dll.push(20);
