function topologicalSort(edges) {

    const nodes = new Set();
    const seen = new Set();
    const stack = [];

    edges.forEach(edge => {
        nodes.add(edge[0]);
        nodes.add(edge[1]);
    });

    for (const node of nodes) {
        if (!seen.has(node)) {
            helper(node)
        }
    }

    while (!!stack.length) {
        console.log(stack.pop());
    }

    function helper(node) {

        seen.add(node);

        for (const n of edges[node]) {
            if (!seen(n)) {
                helper(n);
            }
        }

        stack.push(node);

    }
}