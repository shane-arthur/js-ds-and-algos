function UndirectedGraph() {
    this.edges = {};
}

UndirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight = 0) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}

UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
        delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
        delete this.edges[vertex2][vertex1];
    }

}

UndirectedGraph.prototype.removeVertex = function (vertex) {
    for (const adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }

    delete this.edge[vertex];
}