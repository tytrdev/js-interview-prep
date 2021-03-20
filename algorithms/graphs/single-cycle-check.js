function hasSingleCycle(array) {
  const visited = [];

  let i = 0;
  while (array.length > visited.length) {
    if (visited.length >= 1 && i === 0) return false;
    visited.push(i);

    const next = (i + array[i]) % array.length;
    i = next < 0 ? next + array.length : next;
  }

  return i === 0;
}