let findMaxSlidingWindow = function (arr, window_size) {
  const result = [];
  const windows = (arr.length - window_size) + 1;

  if (windows < 1) return console.error('Number of possible windows must be > 0')

  for (let index = 0; index < windows; index++) {
    let max = null;

    for (let offset = 0; offset < window_size; offset++) {
      const value = arr[index + offset];

      if (!max || max < value) {
        max = value;
      }
    }

    result.push(max)
  }

  return result;
};

// Notes

// Trouble with solution in real time:
// I didn't calculate the number of windows correctly at first, needed to add 1
// I thought the issue was my outer for condition, but it was really the value of
// the variable "windows"

// Actual problems
// Should have used a "deque" data structure (js though?)
  // TBH I think my solution is actually a little cleaner than the odd "deque" thing they tried in JS
  // The "deque" idea (double ended queue) is probably more idiomatic in other languages like C++
// Forgot to check if the array was empty (return [])