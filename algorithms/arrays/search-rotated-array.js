let binarySearchRotated = function (arr, key) {
  if (!arr || !arr.length) {
    return -1;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let division = 0;

  // TODO: Make sure the index arithmetic below doesn't go past the end of the array
  while (arr[division] < arr[division + 1]) {
    // While the current element is less than the next element
    division++;
  }

  console.log('Division: ', division)

  // TODO: Test this
  if (division === arr.length) {
    // This means the array was rotated 0 times
    return binarySearch(arr, key);
  }

  if (arr[division] > key) {
    // Perform binary search on last half
    const location = binarySearch(arr.slice(division + 1), key);
    if (location < 0) return location;
    console.log('Got location: ', location, division)
    return location + division + 1;
  } else {
    // Perform binary search on first half
    const location = binarySearch(arr.slice(0, division + 1), key);
    if (location < 0) return location;
    return location;
  }
};

// Normal/simple binary search
let binarySearch = function (arr, key) {
  console.log('Binary search array: ', arr)
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

const testArray = [4, 5, 6, 1, 2, 3];

const actual1 = binarySearchRotated(testArray, 6);
console.log('Actual 1: ', actual1)
console.log('Expected 1: ', 2)
console.log('Success? ', actual1 === 2);

const actual2 = binarySearchRotated(testArray, 3);
console.log('Actual 2: ', actual2)
console.log('Expected 2: ', 5)
console.log('Success? ', actual2 === 5);