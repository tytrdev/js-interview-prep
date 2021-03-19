const Graph = require('../../data-structures/graphs/graph');

const EDGE_LENGTH = 6;

// n = num vertices, 1 to n
// m = num edges, not used since...
// edges = [ [from, to], ... ];
// s = starting node for search, int from 1 to n
function bfs(n, m, edges, s) {
  const g = new Graph();

  // Add vertices to graph
  for (let i = 1; i <= n; i++) {
    g.insert(i);
  }

  // Add edges to graph
  for (const [a, b] of edges) {
    g.addEdge(a, b);
  }

  // BFS!! 🐱‍🏍
  // TODO: Create actual queue
  const queue = [s, null];

  const distances = {};
  let depth = 0;

  while (queue.length && queue[0]) {
    let node = queue.shift(); // shift = big bad

    if (node !== s && !distances[node]) {
      distances[node] = EDGE_LENGTH * depth;
      queue.push(...graph.getNeighbors(node));
    }

    // handle null/depth     
    if (queue[0] === null) {
      queue.push(queue.shift());
      depth++;
    }
  }

  return Object.values(distances);
}