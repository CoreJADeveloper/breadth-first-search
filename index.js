class Graph {

    // Initialize the algotrithm core data.
    constructor(v) {
        this.V = v; // Global variable to store totoal nodes number.
        this.adj = new Array(v); // Initialize empty array for total nodes.
        for (let index = 0; index < v; index++) {
            this.adj[index] = []; // Initialize every nodes with an empty array
        }
    }

    // Create new edge.
    addEdge(v, w) {
        this.adj[v].push(w); // For example, [0, 1] means node 0 is connected with node 1.
    }

    // Algorithm
    BFS(s) {
        let visited = new Array(this.V); // Initialize visited nodes with array.
        for (let index = 0; index < this.V; index++) {
            visited[index] = false; // No node has been visited yet.
        }
        let queue = []; // Empty queue.
        visited[s] = true; // First node is visited.
        queue.push(s); // First node is pushed to the queue.

        while (queue.length > 0) { // Stop when queue is empty.
            s = queue[0];
            console.log(s + " "); // The node is visited and counted.
            queue.shift(); // Remove the first node from the queue.

            this.adj[s].forEach((adjacent, i) => { // Loop over every adjacent node/s.
                if (!visited[adjacent]) { // Count the node if not already visited.
                    visited[adjacent] = true;
                    queue.push(adjacent); // Place it to the queue.
                }
            });
        }
    }
}

g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.BFS(2);