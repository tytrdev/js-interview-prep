// Normal/simple binary search
let binarySearch = function (arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length && right > -1) {
    const index = Math.floor((left + right) / 2);
    const value = arr[index];

    if (value === key) {
      // TODO: Return index or value? Problem doesn't specify...
      return index;
    } else if (value < key) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }

  return -1;
}

let findLowIndex = function (arr, key) {
  let index = binarySearch(arr, key);
  if (index === -1) return -1;

  while (arr[index] === key) {
    index--;
  }

  return index + 1;
};

let findHighIndex = function (arr, key) {
  let index = binarySearch(arr, key);
  if (index === -1) return -1;

  while (arr[index] === key) {
    index++;
  }

  return index - 1;
};

const array = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];

console.log(findLowIndex(array, 5), findHighIndex(array, 5));
console.log(findLowIndex(array, 2), findHighIndex(array, 2));
console.log(findLowIndex(array, 8), findHighIndex(array, 8));