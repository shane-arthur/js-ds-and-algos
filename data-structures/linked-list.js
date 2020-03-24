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