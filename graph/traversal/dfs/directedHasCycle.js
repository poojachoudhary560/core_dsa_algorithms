const status = {
  INSTACK: "INSTACK",
  VISITED: "VISITED",
  UNVISITED: "UNVISITED",
};

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
    this.time = 0;
  }

  addEdge(u, v) {
    if (!this.adjList.get(u)) {
      this.adjList.set(u, []);
    }
    if (!this.adjList.get(v)) {
      this.adjList.set(v, []);
    }

    this.adjList.get(u).push(v);

    // for undirected
    // this.adjList.get(v).push(u);
  }

  hasCycle(key, visited, pre, post) {
    visited[key] = true;

    pre[key] = this.time++;
    console.log("dfs: ", key);
    const neighbours = this.adjList.get(key);
    for (let i of neighbours) {
      if (!visited[i]) {
        this.hasCycle(i, visited, pre, post);
      }
    }
    post[key] = this.time++;
  }
  dfs() {
    const visited = {};
    const keys = this.adjList.keys();
    let pre = [],
      post = [];
    for (let i of keys) {
      if (!visited[i]) {
        this.hasCycle(i, visited, pre, post);
      }
    }

    for (let i = 0; i < this.noOfVertices; i++) {
      console.log(pre[i] + " : " + post[i]);
    }
  }

  printGraph() {
    var getKeys = this.adjList.keys();
    for (let i of getKeys) {
      let getValues = this.adjList.get(i);

      let conc = "";
      for (let j of getValues) {
        conc += j + " -- ";
      }
      console.log(i + " : " + conc);
    }
  }
}

let g = new Graph(5);

// adding edges
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(3, 2);
g.addEdge(3, 4);

g.printGraph();
// Prints all vertices and their adjacency list
// 0 ==> 1 3
// 1 ==> 0 2
// 3 ==> 0 2 4
// 2 ==> 1 3
// 4 ==> 3

g.dfs();

// dfs:  0
// dfs:  1
// dfs:  2
// dfs:  3
// dfs:  4

// 0 : 9
// 1 : 8
// 2 : 7
// 3 : 6
// 4 : 5
