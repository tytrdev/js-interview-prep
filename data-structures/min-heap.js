class MinHeap {
  constructor(array = []) {
    this.heap = this.buildHeap(array);

    console.log('Built: ', this.heap);
  }

  buildHeap(array) {
    // Write your code here.
    array.sort((a, b) => a - b);
    return [...array];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  siftDown(index, end, heap) {
    let li = (index * 2) + 1;

    while (li <= end) {
      let swapIndex;
      let ri = (index * 2) + 2;
      if (ri > end) ri = -1;

      if (ri > -1 && heap[ri] < heap[li]) {
        swapIndex = ri;
      } else {
        swapIndex = li;
      }

      if (heap[swapIndex] < heap[index]) {
        this.swap(index, swapIndex, heap);
        index = swapIndex;
        li = (index * 2) + 1;
      } else {
        return;
      }
    }
  }

  siftUp(index, heap) {
    // Write your code here.
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && heap[index] < heap[parentIndex]) {
      this.swap(index, parentIndex, heap);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removed = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removed;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}