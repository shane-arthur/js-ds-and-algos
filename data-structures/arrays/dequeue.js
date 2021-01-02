addFront()
removeFront()
peekFront()
addBack()
removeBack()
peekBack()

function Node(val){
    this.value = val;
    this.next = null;
    this.prev = null;
}

function Dequeue(){
    this.head  = null;
    this.prev = null;
}

Dequeue.prototype.addFront = function(val){
    const node = new Node(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
}

Dequeue.prototype.removeFront = function(){
    const node = this.head;
    this.head = this.head.next;
    this.head.prev = null;
}