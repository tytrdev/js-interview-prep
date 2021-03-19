function selectionSort(array) {
  let start = 0;

  while (start < array.length - 1) {
    let left = start;

    for (let right = start + 1; right < array.length; right++) {
      if (array[left] > array[right]) left = right;
    }

    [array[start], array[left]] = [array[left], array[start]];
    start++;
  }

  return array;
}