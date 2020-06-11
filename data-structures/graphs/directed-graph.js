function DirectedGraph() {
    this.edges = {};
}

DirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

DirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight = 0) {
    this.edges[vertex1][vertex2] = weight;
}

DirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
        delete this.edges[vertex1][vertex2];
    }
}

DirectedGraph.prototype.removeVertex = function (vertex) {
    for (const adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}

DirectedGraph.prototype.BFS = function (vertex, callBack = () => {}) {
    const queue = [],
        visited = {};
    queue.push(vertex);

    while (queue.length) {
        vertex = queue.shift();
        if (!visited[vertex]) {
            visited[vertex] = true;
        }
        callBack(vertex);
        for (const adjacentVertex in this.edges[vertex]) {
            queue.push(adjacentVertex);
        }
    }
}

DirectedGraph.prototype.DFS = function (vertex, callback = () => {}) {
    const visited = {};
    this.DFSHelper(vertex, visited);

    function DFSHelper(vertex, visited) {
        visited[vertex] = true;
        callback(vertex);
        for (const adjacentVertex in this.edges[vertex]) {
            if (!visited[adjacentVertex]) {
                this.DFSHelper(adjacentVertex, visited);
            }
        }
    }
}