class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];

    while (queue.length > 0) {
      const node = queue.shift();
      array.push(node.name);
      queue.push(...node.children);
    }

    return array;
  }
}