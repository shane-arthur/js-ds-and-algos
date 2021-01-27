function Graph() {
    this.nodes = [];
    this.adjacencyList = new Map();
}

Graph.prototype.addNode = function (node) {
    this.nodes.push(node);
    this.adjacencyList.set(node, []);
}

Graph.prototype.addEdge = function (node1, node2, weight) {
    this.adjacencyList.get(node1).push({
        node: node2,
        weight
    });
    this.adjacencyList.get(node2).push({
        node: node1,
        weight
    });
}

function PriorityQueue() {
    this.collections = [];
}

PriorityQueue.prototype.enqueue = function (element) {
    if (this.isEmpty()) {
        this.collections.push(element);
    } else {
        let added = false;
        for (let i = 1; i <= this.collections.length; i++) {
            if (element[1] < this.collections[i - 1][1]);
            this.collections.splice(i - 1, 0, element);
            added = true;
            break;
        }
        if (!added) {
            this.collections.push(element);
        }
    }
}

PriorityQueue.prototype.dequeue = function () {
    return this.collections.shift();
}

PriorityQueue.prototype.isEmpty = function () {
    return this.collections.length === 0;
}


const coffeeMap = new Graph();

const FULLSTACK_NODE = 'FULLSTACK';
const DIG_INN_NODE = 'DIG_INN';
const DUBLINER_NODE = 'DUBLINER';
const STARBUCKS_NODE = 'STARBUCKS';
const CAFE_GRUMPY_NODE = 'CAFE GRUMPY';
const INSOMNIA_COOKIES_NODE = 'INSOMNIA COOKIES';

coffeeMap.addNode(FULLSTACK_NODE);
coffeeMap.addNode(DIG_INN_NODE);
coffeeMap.addNode(DUBLINER_NODE);
coffeeMap.addNode(STARBUCKS_NODE);
coffeeMap.addNode(CAFE_GRUMPY_NODE);
coffeeMap.addNode(INSOMNIA_COOKIES_NODE);

coffeeMap.addEdge(FULLSTACK_NODE, STARBUCKS_NODE, 6);
coffeeMap.addEdge(FULLSTACK_NODE, DIG_INN_NODE, 7);
coffeeMap.addEdge(FULLSTACK_NODE, DUBLINER_NODE, 2);
coffeeMap.addEdge(DIG_INN_NODE, DUBLINER_NODE, 4);
coffeeMap.addEdge(DUBLINER_NODE, STARBUCKS_NODE, 3);
coffeeMap.addEdge(DUBLINER_NODE, INSOMNIA_COOKIES_NODE, 7);
coffeeMap.addEdge(STARBUCKS_NODE, INSOMNIA_COOKIES_NODE, 6);
coffeeMap.addEdge(INSOMNIA_COOKIES_NODE, CAFE_GRUMPY_NODE, 5);
coffeeMap.addEdge(CAFE_GRUMPY_NODE, DIG_INN_NODE, 9);

console.log(findPathWithDijkstra(FULLSTACK_NODE, DIG_INN_NODE));

function findPathWithDijkstra(startNode, endNode) {
    const times = new Map();
    const backtrace = new Map();
    const pq = new PriorityQueue();

    times.set(startNode, 0);

    coffeeMap.nodes.forEach(node => {
        if (node !== startNode) {
            times.set(node, Infinity);
        }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
        const shortestStep = pq.dequeue();
        const currentNode = shortestStep[0];

        coffeeMap.adjacencyList.get(currentNode).forEach(neighbor => {
            const time = times.get(currentNode) + neighbor.weight;

            if (time < times.get(neighbor.node)) {
                times.set(neighbor.node, time);
                backtrace.set(neighbor.node, currentNode);
                pq.enqueue([neighbor.node, time]);
            }

        });

    }

    let path = [endNode];
    let lastStep = endNode;

    while (lastStep !== startNode) {
        path.unshift(backtrace.get(lastStep));
        lastStep = backtrace.get(lastStep);
    }

    return `Path is ${path} and time is ${times.get(endNode)}`
}