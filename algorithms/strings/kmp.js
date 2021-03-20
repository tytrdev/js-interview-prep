function knuthMorrisPrattAlgorithm(string, substring) {
  const patterns = Array(substring.length).fill(-1);

  let i = 1, j = 0;
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      patterns[i++] = j++;
    } else if (j > 0) {
      j = patterns[j - 1] + 1;
    } else {
      i++;
    }
  }

  i = 0, j = 0;
  while (i + substring.length - j <= string.length) {
    if (string[i] === substring[j]) {
      if (j === substring.length - 1) return true;
      i++; j++;
    } else if (j > 0) {
      j = patterns[j - 1] + 1;
    } else {
      i++;
    }
  }

  return false;
}