class Graph {
  constructor() {
    this.size = 0;
    this.adj = {};
  }

  insert(v) {
    this.size++;
    this.adj[v] = [];
  }

  addEdge(a, b) {
    // TODO: If !a || !b, error
    this.adj[a].push(b);
    this.adj[b].push(a);
  }

  getNeighbors(v) {
    return this.adj[v];
  }
}
