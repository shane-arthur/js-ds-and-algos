function Queue(arr){
    this.array = [];
    if (arr) this.array = arr;
}

Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length === 0;
}

Queue.prototype.enqueue = function(value){
    return this.array.push(value)
}

Queue.prototype.debqueue = function(){
    return this.array.shift();
}

module.exports = Queue;