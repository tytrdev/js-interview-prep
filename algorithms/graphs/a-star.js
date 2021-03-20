function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const nodes = [];

  for (const [i, row] of graph.entries()) {
    nodes.push([]);

    for (const [j, type] of row.entries()) {
      const node = new Node(i, j, type);
      nodes[i].push(node);
    }
  }

  const start = nodes[startRow][startCol];
  const end = nodes[endRow][endCol];

  start.distanceFromStart = 0;
  start.heuristicValue = heuristic(start, end);

  const pq = new MinHeap([start]);

  while (!pq.empty()) {
    const node = pq.remove();
    if (node === end) break;

    const neighbors = getNeighbors(node, nodes);
    for (const neighbor of neighbors) {
      const distance = node.distanceFromStart + 1;
      if (distance >= neighbor.distanceFromStart) continue;

      neighbor.parent = node;
      neighbor.distanceFromStart = distance;
      neighbor.heuristicValue = distance + heuristic(neighbor, end);

      if (!pq.contains(neighbor)) {
        pq.insert(neighbor);
      } else {
        pq.update(neighbor);
      }
    }
  }

  return path(end);
}

function path(from) {
  const path = [];
  if (!from.parent) return path; // Sadz, little orphan node 💔

  while (from) {
    path.push([from.row, from.column]);
    from = from.parent;
  }

  return path.reverse();
}

// Manhattan distance
function heuristic(node, destination) {
  const xdiff = node.row - destination.row;
  const ydiff = node.column - destination.column;

  return Math.abs(xdiff) + Math.abs(ydiff);
}

// Get neighbors
function getNeighbors(node, nodes) {
  const W = nodes.length - 1;
  const H = nodes[0].length - 1;

  const neighbors = [];
  const locations = [
    [node.row, node.column + 1],
    [node.row, node.column - 1],
    [node.row + 1, node.column],
    [node.row - 1, node.column],
  ];

  for (const [i, j] of locations) {
    if (i < 0 || i > W || j < 0 || j > H) continue;
    if (nodes[i][j].type === 0) {
      neighbors.push(nodes[i][j]);
    }
  }

  return neighbors;
}

class Node {
  constructor(row, column, type) {
    this.id = `${row}-${column}`;
    this.row = row;
    this.column = column;
    this.type = type;
    this.distanceFromStart = Infinity;
    this.heuristicValue = Infinity;
    this.parent; // Just for clarity that it could exist
  }
}

class MinHeap {
  constructor(array) {
    this.positions = array.reduce((obj, node, i) => {
      obj[node.id] = i;
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

      if (ri > -1 && heap[ri].heuristicValue < heap[li].heuristicValue) {
        swapIndex = ri;
      } else {
        swapIndex = li;
      }

      if (heap[swapIndex].heuristicValue < heap[index].heuristicValue) {
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

    while (index > 0 && heap[index].heuristicValue < heap[parentIndex].heuristicValue) {
      this.swap(index, parentIndex, heap);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    if (this.empty()) return;

    this.swap(0, this.heap.length - 1, this.heap);
    const node = this.heap.pop();
    delete this.positions[node.id];
    this.siftDown(0, this.heap.length - 1, this.heap);
    return node;
  }

  swap(i, j, heap) {
    this.positions[this.heap[i].id] = j;
    this.positions[this.heap[j].id] = i;

    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  insert(node) {
    this.heap.push(node);
    this.positions[node.id] = this.heap.length - 1;
    this.siftUp(this.heap.length - 1, this.heap);
  }

  update(node) {
    this.siftUp(this.positions[node.id], this.heap);
  }

  contains(node) {
    return node.id in this.positions;
  }

  empty() {
    return this.heap.length === 0;
  }
}