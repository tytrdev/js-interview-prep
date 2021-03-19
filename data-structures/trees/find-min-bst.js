let findMinInTree = function (root) {
  if (!root) {
    return null;
  }

  while (root.left) {
    root = root.left;
  }

  return root;
};