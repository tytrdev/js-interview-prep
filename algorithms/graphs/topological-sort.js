class Graph {
  constructor(jobs) {
    this.vertices = [];
    this.graph = [];

    for (const job of jobs) {
      this.insert(job);
    }
  }

  insert(job) {
    const vertex = {
      job,
      dependencies: [],
      dependents: 0,
    };

    this.graph[job] = vertex;
    this.vertices.push(vertex);
  }

  addDependency(job, dependency) {
    const A = this.get(job);
    const B = this.get(dependency);

    A.dependencies.push(B);
    B.dependents++;
  }

  get(v) {
    if (!(v in this.graph)) this.insert(v);
    return this.graph[v];
  }

  getIndependentJobs() {
    return this.vertices.filter(v => v.dependents === 0);
  }

  removeDependencies(vertex, independentJobs) {
    while (vertex.dependencies.length) {
      const dependency = vertex.dependencies.pop();
      dependency.dependents--;
      if (dependency.dependents < 1) independentJobs.push(dependency);
    }
  }

  isEmpty() {
    return !this.vertices.find(v => v.dependents !== 0);
  }
}

function topologicalSort(jobs, deps) {
  const graph = new Graph(jobs);
  for (const [job, dependency] of deps) {
    graph.addDependency(job, dependency);
  }

  const jobOrder = [];
  const independentJobs = graph.getIndependentJobs();

  while (independentJobs.length > 0) {
    const vertex = independentJobs.pop();
    jobOrder.push(vertex.job);
    graph.removeDependencies(vertex, independentJobs);
  }

  const isEmpty = graph.isEmpty();
  return isEmpty ? jobOrder : [];
}