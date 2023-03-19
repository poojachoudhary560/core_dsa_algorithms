class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(u, v) {
    this.adjList.get(u).push(v);

    // for undirected
    this.adjList.get(v).push(u);
  }

  dfs_recursive(key, visited) {
    visited[key] = true;
    console.log("dfs: ", key);
    const neighbours = this.adjList.get(key);
    for (let i of neighbours) {
      if (!visited[i]) {
        this.dfs_recursive(i, visited);
      }
    }
  }
  dfs() {
    const visited = {};
    const keys = this.adjList.keys();
    for (let i of keys) {
      if (!visited[i]) {
        this.dfs_recursive(i, visited);
      }
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

let g = new Graph(6);
let vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
// Prints all vertices and their adjacency list
// A ==> B D E
// B ==> A C
// C ==> B E F
// D ==> A E
// E ==> A D F C
// F ==> E C

g.dfs();

// dfs:  A
// dfs:  B
// dfs:  C
// dfs:  E
// dfs:  D
// dfs:  F
