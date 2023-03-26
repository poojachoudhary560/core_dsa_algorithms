class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  add(data) {
    this.values.push(data);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let maxId = idx;
    let parentIdx = Math.floor((idx - 1) / 2);
    if (
      parentIdx >= 0 &&
      this.values[parentIdx].priority > this.values[maxId].priority
    ) {
      maxId = parentIdx;
    }
    if (maxId !== idx) {
      this.swap(maxId, idx);
      this.bubbleUp(maxId);
    }
  }

  remove() {
    this.swap(0, this.values.length - 1);
    let maxEl = this.values.pop();
    this.trickleDown(0);
    return maxEl;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  trickleDown(idx) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let maxId = idx;
    if (
      leftChildIdx < this.values.length &&
      this.values[leftChildIdx].priority < this.values[maxId].priority
    ) {
      maxId = leftChildIdx;
    }
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx].priority < this.values[maxId].priority
    ) {
      maxId = rightChildIdx;
    }
    if (idx !== maxId) {
      this.swap(idx, maxId);
      this.trickleDown(maxId);
    }
  }
}

let minPQ = new MinPriorityQueue();
let nums = [1, 5, 9, 10, 11, 13, 12, 13, 15];
for (let n of nums)
  minPQ.add({
    val: n,
    priority: n,
  });
