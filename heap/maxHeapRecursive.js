class MaxHeap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let max = idx;
    let parentIdx = Math.floor((idx - 1) / 2);
    if (parentIdx >= 0 && this.values[parentIdx] < this.values[max]) {
      max = parentIdx;
    }
    if (max !== idx) {
      this.swap(max, idx);
      this.bubbleUp(max);
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
      this.values[leftChildIdx] > this.values[maxId]
    ) {
      maxId = leftChildIdx;
    }
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx] > this.values[maxId]
    ) {
      maxId = rightChildIdx;
    }
    if (idx !== maxId) {
      this.swap(idx, maxId);
      this.trickleDown(maxId);
    }
  }
}

let maxHeap = new MaxHeap();
let nums = [1, 5, 9, 10, 11, 13, 12, 13, 15];
for (let n of nums) maxHeap.add(n);
