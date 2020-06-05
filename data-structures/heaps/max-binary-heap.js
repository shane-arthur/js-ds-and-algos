function Heap(data) {
    this.items = []
}

Heap.prototype.swap = function (index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1) / 2);
}

Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)];
}

Heap.prototype.leftChildIndex = function (index) {
    return index * 2 + 1
}

Heap.prototype.rightChildIndex = function (index) {
    return this.leftIndex + 1;
}

Heap.prototype.rightChildItem = function (index) {
    return this.items[this.rightChildIndex(index)];
}

Heap.prototype.leftChildItem = function (index) {
    return this.items[this.leftChildIndex(index)];
}

Heap.prototype.peak = function () {
    return this.heap[0];
}

Heap.prototype.poll = function () {
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();
    return item;
}

Heap.prototype.bubbleDown = function () {
    let index = 0;
    while (this.leftChild(index) && this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index]) {
        let biggerIndex = this.leftChildIndex(leftChild);
        if (this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
            biggerIndex = this.rightChildIndex(index);
        }
        this.swap(biggerIndex, index);
        index = biggerIndex;
    }
}

Heap.prototype.bubbleUp = function () {
    let index = this.items.length - 1;

    while (this.parent[index] && this.parent(index) < this.items[index]) {
        this.swap(this.parentIndex(parent), index);
        index = this.parentIndex(index);
    }
}