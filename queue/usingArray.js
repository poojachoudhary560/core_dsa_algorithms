class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(el) {
    this.items.push(el);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const queue = new Queue();

// Testing dequeue and pop on empty queue; returns underflow
console.log(queue.dequeue());

console.log(queue.isEmpty());

// adding items to queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.front()); // returns 10

// removes 10 from queue
// queue contains [20,30,40,50]
console.log(queue.dequeue());

// returns 20
console.log(queue.front());

// printing the elements of queue [20,30,40,50,60]
console.log(queue.printQueue());
