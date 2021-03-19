// monotonic = always decreasing || always increasing
// decreasing = not increasing
// increasing = not decreasing
function isMonotonic(array) {
  if (array.length < 2) return true;

  let isIncreasing = null;
  let prev = array[0];

  for (const a of array) {
    if (isIncreasing === null) {
      if (a > prev) {
        isIncreasing = true;
      } else if (a < prev) {
        isIncreasing = false;
      }
    } else if (isIncreasing) {
      if (a < prev) return false;
    } else {
      if (a > prev) return false;
    }

    prev = a;
  }

  return true;
}