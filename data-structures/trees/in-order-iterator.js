class InorderIterator {
  constructor(root) {
    this.stack = [];
    this.fillStack(root);
  }

  fillStack(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  hasNext() {
    return !!this.stack && !!this.stack.length;
  }

  // getNext returns null if there are no more elements in tree
  getNext() {
    if (!this.stack && !this.stack.length) return null;

    const current = this.stack.pop();
    this.fillStack(current.right);
    return current;
  }
}

let inorderUsingIterator = function (root) {
  let iter = new InorderIterator(root);
  let result_str = '';
  while (iter.hasNext()) {
    let ptr = iter.getNext();
    result_str += ptr.data + ' ';
  }
  return result_str;
};