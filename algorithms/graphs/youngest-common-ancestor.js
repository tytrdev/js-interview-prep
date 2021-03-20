class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  const ancestors = [];

  let node = descendantOne;
  ancestors.push(node.name);

  while (node.ancestor) {
    node = node.ancestor;
    ancestors.push(node.name);
  }

  node = descendantTwo;
  while (node) {
    if (ancestors.indexOf(node.name) !== -1) {
      return node;
    }
    node = node.ancestor;
  }

  return topAncestor;
}