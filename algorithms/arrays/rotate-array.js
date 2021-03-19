let rotateArray = function (arr, n) {
  if (n === 0) return;

  if (n < 0) {
    // arr.length - n is the dividing point
    n = n * -1;
    const head = arr.slice(0, n);
    const temp = arr.slice(n, arr.length - n + 1);

    // Splice head onto last half
    arr.splice(n, arr.length - n, ...head);

    // Splice temp onto first half
    arr.splice(0, n, ...temp);
  } else {
    // arr.length - n is the dividing point
    const temp = arr.slice(arr.length - n, arr.length);
    const head = arr.slice(0, arr.length - n);

    // Splice head onto last half
    arr.splice(n, arr.length - n, ...head);

    // Splice temp onto first half
    arr.splice(0, n, ...temp);
  }
};

let array = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
rotateArray(array, 2);
console.log(array);

array = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
rotateArray(array, -1);
console.log(array);