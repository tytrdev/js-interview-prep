class MinHeap {
  constructor(array) {
    this.vertices = array.reduce((obj, _, i) => {
      obj[i] = i;
      return obj;
    }, {});

    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const first = Math.floor((array.length - 2) / 2);

    for (let i = first; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }

    return array;
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

      if (ri > -1 && heap[ri][1] < heap[li][1]) {
        swapIndex = ri;
      } else {
        swapIndex = li;
      }

      if (heap[swapIndex][1] < heap[index][1]) {
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

    while (index > 0 && heap[index][1] < heap[parentIndex][1]) {
      this.swap(index, parentIndex, heap);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    if (this.heap.length < 0) return;
    this.swap(0, this.heap.length - 1, this.heap);
    const [vertex, distance] = this.heap.pop();
    delete this.vertices[vertex];
    this.siftDown(0, this.heap.length - 1, this.heap);
    return [vertex, distance];
  }

  swap(i, j, heap) {
    this.vertices[heap[i][0]] = j;
    this.vertices[heap[j][0]] = i;

    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  update(vertex, value) {
    this.heap[this.vertices[vertex]] = [vertex, value];
    this.siftUp(this.vertices[vertex], this.heap);
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstrasAlgorithm(start, edges) {
  const distances = [];
  const initialDistances = [];

  for (let i = 0; i < edges.length; i++) {
    distances.push(Infinity);
    initialDistances.push([i, Infinity]);
  }

  distances[start] = 0;

  const heap = new MinHeap(initialDistances);
  heap.update(start, 0);

  while (!heap.isEmpty()) {
    const [vertex, min] = heap.remove();
    if (min === Infinity) break;

    for (const [destination, distance] of edges[vertex]) {
      const newDistance = min + distance;
      const currentDistance = distances[destination];

      if (newDistance < currentDistance) {
        distances[destination] = newDistance;
        heap.update(destination, newDistance);
      }
    }
  }

  return distances.map(x => x === Infinity ? -1 : x);
}