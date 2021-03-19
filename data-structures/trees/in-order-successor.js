let findMin = function (root) {
  console.log('Finding min: ', root);
  if (!root) return null;

  while (root) {
    if (!root.left) return root.data;
    root = root.left;
  }

  return null;
}

let inorderSuccessorBST = function (root, d) {
  if (!root) {
    return null;
  }

  while (root) {
    if (root.data === d) {
      return findMin(root.right);
    }

    if (root.data < d) root = root.right;

    if (root.data > d) {
      root = root.left;
    }
  }

  return null;
};