function Stack(arr){
    this.array = [];
    if (arr) this.array = arr;
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.isEmpty = function(){
    return this.array.length ===0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
}

Stack.prototype.push = function(value){
    this.array.push(value);
}

Stack.prototype.pop = function(){
    return this.array.pop();
}

module.exports = Stack;