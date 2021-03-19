class Queue {
  constructor() {
    this.inbound = [];
    this.outbound = [];
  }

  dump() {
    if (this.outbound.length) {
      return;
    }

    while (this.inbound.length) {
      this.outbound.push(this.inbound.pop());
    }
  }

  enqueue(val) {
    this.inbound.push(val);
  }

  dequeue() {
    this.dump();
    return this.outbound.pop();
  }

  peek() {
    this.dump();
    return this.outbound[this.outbound.length - 1];
  }
}