/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    function Heap() {
        this.items = [];
    }

    Heap.prototype.swap = function (index1, index2) {
        [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
    }

    Heap.prototype.parentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    }

    Heap.prototype.leftChildIndex = function (index) {
        return (2 * index) + 1;
    }

    Heap.prototype.rightChildIndex = function (index) {
        return (2 * index) + 2;
    }

    Heap.prototype.parent = function (index) {
        return this.items[this.parentIndex(index)];
    }

    Heap.prototype.leftChild = function (index) {
        return this.items[this.parentIndex(index)];
    }

    Heap.prototype.rightChild = function (index) {
        return this.items[this.rightChildIndex(index)];
    }

    Heap.prototype.leftChild = function (index) {
        return this.items[this.leftChildIndex(index)];
    }

    Heap.prototype.peak = function () {
        return this.items[0]
    }

    Heap.prototype.size = function () {
        return this.items.length;
    }

    function MaxHeap() {
        this.items = [];
    }

    MaxHeap.prototype = Object.create(Heap.prototype);

    MaxHeap.prototype.bubbleDown = function () {
        let index = 0;
        let biggerIndex = 0;
        while (this.leftChild(index) && this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index]) {
            biggerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) > this.items[biggerIndex]) {
                biggerIndex = this.rightChildIndex(index);
            }
            this.swap(biggerIndex, index);
            index = biggerIndex;
        }
    }

    MaxHeap.prototype.bubbleUp = function () {

        let index = this.items.length - 1;

        while (this.parent(index) && this.parent(index) < this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    MaxHeap.prototype.add = function (item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }

    MaxHeap.prototype.poll = function () {
        const item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }

    courses.sort((c1, c2) => c1[1] - c2[1]);

    const maxHeap = new MaxHeap();

    let time = 0;

    for (const course of courses) {
        if (time + course[0] <= course[1]) {
            maxHeap.add(course[0]);
            time += course[0];
        } else if (maxHeap.size() > 0 && maxHeap.peak() > course[0]) {
            time += course[0] - maxHeap.poll();
            maxHeap.add(course[0]);
        }
    }

    return maxHeap.size();
};