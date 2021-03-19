let findLeastCommonNumber = function (a, b, c) {
  let i = 0, j = 0, k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    const aVal = a[i];
    const bVal = b[j];
    const cVal = c[k];

    console.log('Run: ', aVal, bVal, cVal)

    if (aVal === bVal && bVal === cVal) {
      console.log('Equal')
      return a[i];
    }

    if (aVal <= bVal && aVal <= cVal) {
      i++;
    } else if (bVal <= aVal && bVal <= cVal) {
      j++;
    } else if (cVal <= aVal && cVal <= bVal) {
      k++;
    }
  }

  return -1;
};

const a = [6, 7, 10, 25, 30, 63, 64];
const b = [0, 4, 5, 6, 7, 8, 50];
const c = [1, 6, 10, 14];

const common = findLeastCommonNumber(a, b, c);
console.log('Found common: ', common)