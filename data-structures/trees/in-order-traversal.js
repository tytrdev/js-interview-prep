let inorderIterative = function (root) {
  const values = [];
  const stack = [];

  const fillStack = (node) => {
    while (node) {
      stack.push(node);
      // Start with left since in-order
      node = node.left;
    }
  }

  fillStack(root);

  while (stack.length) {
    const node = stack.pop();
    values.push(node.data);
    fillStack(node.right);
  }

  return values.join(" ") + " ";
};