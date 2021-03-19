function quickSort(array) {
  quickSortRec(array, 0, array.length - 1);
  return array;
}

function quickSortRec(array, start, end) {
  if (start >= end) return;

  const pivot = start;
  let [left, right] = [start + 1, end];

  while (right >= left) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(array, left, right);
    }

    if (array[left] <= array[pivot]) left++;
    if (array[right] >= array[pivot]) right--;
  }

  swap(array, pivot, right);

  const isLeftSmaller = right - 1 - start < end - (right + 1);

  if (isLeftSmaller) {
    quickSortRec(array, start, right - 1);
    quickSortRec(array, right + 1, end);
  } else {
    quickSortRec(array, right + 1, end);
    quickSortRec(array, start, right - 1);
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}