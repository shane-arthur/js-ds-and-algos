// connected components

var pairs = [
    ["a2", "a5"],
    ["a3", "a6"],
    ["a4", "a5"],
    ["a7", "a9"]
];

console.log(group(pairs));

function group(pairs) {

    const adjList = new Map();
    const visited = new Map();
    const nodes = new Set();

    for (const [src, dest] of pairs) {
        if (!adjList.has(src)) {
            adjList.set(src, []);
        }

        if (!adjList.has(dest)) {
            adjList.set(dest, []);
        }

        adjList.get(src).push(dest);
        adjList.get(dest).push(src);
        nodes.add(src);
        nodes.add(dest);
    }

    const output = [];
    for (const node of Array.from(nodes)) {
        if (!visited.has(node)) {
            const res = (bfs(node));
            if (!!res.length) output.push(res);
        }
    }

    return output;

    function bfs(node) {
        const queue = [node];
        const subGraph = [];

        while (!!queue.length) {
            const vertex = queue.shift();
            if (!!visited[vertex]) continue;
            visited[vertex] = true;
            subGraph.push(vertex);
            if (adjList.has(vertex)) {
                for (const node of adjList.get(vertex)) {
                    queue.push(node);
                }
            }
        }
        return subGraph;
    }
}