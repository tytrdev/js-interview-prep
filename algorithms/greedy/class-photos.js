function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const firstColor = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

  for (let i = 0; i < redShirtHeights.length; i++) {
    const red = redShirtHeights[i];
    const blue = blueShirtHeights[i];

    if (firstColor === 'RED') {
      if (red >= blue) return false;
    } else if (blue >= red) return false;
  }

  return true;
}