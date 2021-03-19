function bubbleSort(array) {
  let sorted = false;
  let end = array.length - 1;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < end; i++) {
      const j = i + 1;

      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        sorted = false;
      }
    }

    end--;
  }

  return array;
}