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

  bfs(startingNode) {
    let visited = {};
    const queue = [];
    queue.push(startingNode);
    visited[startingNode] = true;

    while (queue.length > 0) {
      const element = queue.shift();
      console.log("bfs ==", element);
      let itemsList = this.adjList.get(element);
      for (let item of itemsList) {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
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

g.bfs("A");
