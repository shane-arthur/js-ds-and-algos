function Heap(data) {
    this.items = []
}

Heap.prototype.swap = function (index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.leftIndex = function(index){
    return index * 2 + 1
}

Heap.prototype.rightIndex = function(index){
    return this.leftIndex + 1;
}

Heap.prototype.rightItem = function(index){

}

Heap.prototype.leftItem = function(index){
    
}