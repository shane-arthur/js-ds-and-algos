function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}

SinglyLinkedList.prototype.insert = function (data) {
    if (this.head === null) {
        this.head = new SinglyLinkedListNode(data);
    } else {
        const temp = this.head;
        this.head = new SinglyLinkedListNode(data);
        this.head.next = temp;
    }
    this.size++;
}

SinglyLinkedList.prototype.remove = function (value) {
    const currentHead = this.head;

    if (this.currentHead.data === value) {
        this.head = currentHead.next;
        this.size--;
    } else {
        const prev = currentHead;
        while (currentHead.next) {
            if (currentHead.data === value) {
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break;
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }

        if (currentHead.data === value) {
            prev.next = null;
        }

        this.size--;

    }

}


function Node(val) {
    this.val = val;
    this.next = this.prev = null;
  }
  
  function DoublyLinkedList() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  DoubleLinkedList.prototype.insertAtHead = function(val) {
    const node = new Node(val);
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
  }
  
  DoublyLinkedList.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  DoublyLinkedList.prototype.removeAtTail = function() {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail.val;
  }
  