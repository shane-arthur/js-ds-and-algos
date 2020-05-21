
// define a LRU node which will act as an entry in the LFU cache which is 
// essentially a doubly-linked list
function LRUNode(key, value){
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLinkedList(){
    this.head = new LFUNode('Buffer head', null);
    this.tail = new LFUNode('Buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0; 
}

LFUDoublyLinkedList.prototype.insertAtHead = function(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function() {
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}


function LFUCache(capacity){
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}

LFUCache.prototype.set = function(key, value) {
    const node = this.keys[key];
    
    if (node === undefined){
        node = new LFUNode(key, value);

        this.keys[key] = node;

        if (this.size !== this.capacity){
            if (this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        } else{
            const oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];

            if (this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }

            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1;

    } else {

        const oldFreqCount = node.freqCount;
        node.data = value;
        node.freqCount++;
        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined){
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount === this.minFreq && Object.keys(this.freq[oldFreqCount]).size === 0){
            this.minFreq++
        }
    }
}

