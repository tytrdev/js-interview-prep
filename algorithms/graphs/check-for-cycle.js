const WHITE = "WHITE";
const GREY = "GREY";
const BLACK = "BLACK";

class Vertex {
  constructor(id, color = WHITE) {
    this.id = id;
    this.color = color;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
    this.adj = {};
  }

  insert(v) {
    if (v in this.vertices) {
      throw new Error(`Duplicate vertex ${v}`);
    }

    // Create a vertex with the id, default color of white
    this.vertices[v] = new Vertex(v);
    this.adj[v] = []; // A simple array should be fine, for now
  }

  // Add an edge in the adjacency list between vertices a and b
  addConnection(a, b) {
    if (a in this.vertices && b in this.vertices) {
      this.adj[a].push(b);
    } else {
      throw new Error(`Cannot create edge between missing vertices ${a} and ${b}`);
    }
  }

  getNeighbors(v) {
    if (v in this.vertices) {
      return this.adj[v];
    }

    throw new Error(`Cannot get neighbors for non existant vertex ${v}`);
  }
}

function cycleInGraph(edges) {
  const graph = new Graph();

  for (let i = 0; i < edges.length; i++) {
    graph.insert(i);
  }

  for (const [i, neighbors] of edges.entries()) {
    for (const neighbor of neighbors) {
      graph.addConnection(i, neighbor);
    }
  }

  for (const [_, vertex] of Object.entries(graph.vertices)) {
    if (vertex.color !== WHITE) continue;

    const hasCycle = checkForCycle(vertex, graph); // params
    if (hasCycle) {
      return true;
    }
  }

  return false;
}

function checkForCycle(vertex, graph) {
  vertex.color = GREY;

  const neighbors = graph.getNeighbors(vertex.id);

  for (const id of neighbors) {
    const neighbor = graph.vertices[id];

    if (neighbor.color === GREY) return true;
    if (neighbor.color === BLACK) continue;

    // If the neighbor is still unvisited
    const hasCycle = checkForCycle(neighbor, graph);
    if (hasCycle) return true;
  }

  vertex.color = BLACK;
}