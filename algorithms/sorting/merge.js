function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return mergeSortedArrays(left, right);
}

function mergeSortedArrays(left, right) {
  const sorted = new Array(left.length + right.length);

  let i = 0, j = 0, k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted[k++] = left[i++];
    } else {
      sorted[k++] = right[j++];
    }
  }

  while (i < left.length) sorted[k++] = left[i++];
  while (j < right.length) sorted[k++] = right[j++];

  return sorted;
}