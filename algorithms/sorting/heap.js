function heapSort(array) {
  buildMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapifyDown(array, 0, i - 1);
  }

  return array;
}

function getParentIndex(i) {
  return Math.floor((i - 1) / 2);
}

function buildMaxHeap(array) {
  const first = getParentIndex(array.length - 1);
  for (let i = first; i >= 0; i--) {
    heapifyDown(array, i, array.length - 1);
  }
}

function heapifyDown(heap, current, end) {
  let li = (2 * current) + 1;

  while (li <= end) {
    let ri = (2 * current) + 2;
    if (ri > end) ri = -1;

    let swapIndex;

    if (ri !== -1 && heap[ri] > heap[li]) {
      swapIndex = ri;
    } else {
      swapIndex = li;
    }

    if (heap[swapIndex] > heap[current]) {
      swap(heap, current, swapIndex);
      current = swapIndex;
      li = (2 * current) + 1;
    } else {
      return;
    }
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}