function staircaseTraversal(height, maxSteps) {
  if (height < 2) return 1;

  let numWays = 0;

  for (let i = 1; i < Math.min(maxSteps, height) + 1; i++) {
    numWays += staircaseTraversal(height - i, maxSteps);
  }

  return numWays;
}