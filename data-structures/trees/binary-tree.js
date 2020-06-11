function item(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.insert = function (value) {
    const node = new item(value);

    if (!this._root) {
        this._root = node;
    } else {
        let currentRoot = this._root;

        while (true) {
            if (currentRoot.value > value) {
                if (currentRoot.left !== null) {
                    currentRoot = currentRoot.left
                } else {
                    currentRoot.left = node;
                    break;
                }
            } else if (currentRoot.value < value) {
                if (currentRoot.right !== null) {
                    currentRoot = currentRoot.right
                } else {
                    currentRoot.right = node;
                    break;
                }
            } else {
                continue;
            }
        }

    }
}

BinarySearchTree.prototype.remove = function (value) {

    const findMin = (root) => {
        while (root.left) {
            root = root.left
        }
        return root;
    }

    return removeFuncHelper(this._root, value);

    function removeFuncHelper(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = removeFuncHelper(root.left, value);
        } else if (value > root.value) {
            root.right = removeFuncHelper(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else {
                const temp = findMin(root.right);
                root.value = temp.value;
                root.right = removeFuncHelper(root.right, temp.value)
                return root;
            }
        }
        return root;
    }
}

BinarySearchTree.prototype.findNode = function (value) {
    let currentRoot = this._root;
    let found = false;

    while (currentRoot) {
        if (currentRoot.value > value) {
            currentRoot = currentRoot.left
        } else if (currentRoot.value < value) {
            currentRoot = currentRoot.right
        } else {
            found = true;
            break;
        }
    }
    return found;
}

BinarySearchTree.prototype.traverseInOrder = function () {
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node) {
        if (!node)
            return;

         traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinarySearchTree.preOrderTraversalIterative = function () {
    const stack = [];
    const result = [];
    let root = this._root;

    stack.push(root);

    while (stack.length > 0) {
        const current = stack.pop();

        if (current) {
            stack.push(current.right);
            stack.push(current.left);

            result.push(current.value);

        }
    }
}

BinarySearchTree.prototype.traverseInOrderIterative = function () {
    let root = this._root;
    const output = [];
    const stack = [];

    if (!root) {
        return output;
    }

    while (root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left ? root.left : null;
        }

        root = stack.pop();
        output.push(root.value);
        root = root.right ? root.right : null;
    }

    return output.join(" ");
}

BinarySearchTree.prototype.validateBinarySearchTree = function () {
    const root = this._root;
    if (root === null) return true;
    const stack = [];
    let prevNode = null;

    while (root !== null || stack.length > 0) {
        stack.push(root);
        root = root.left ? root.left : null;
    }

    root = stack.pop();
    if (prevNode !== null && prevNode.value >= root.value) return false;
    prevNode = root;
    root = root.right ? root.right : null;

    return true;

}

BinarySearchTree.prototype.findKthSmallestItem = function(k) {
    let root = this._root;
    const stack = [];

    while (root !== null || stack.length > 0) {
        stack.push(root);
        root = root.left ? root.left : null;
    }

    root = stack.pop();
    k--;
    if (k === 0) return root.value;
    root = root.right ? root.right : null;


}


BinarySearchTree.prototype.traversePostOrder = function () {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (node.left)
            traversePostOrderHelper(node.left);
        if (node.right)
            traversePostOrderHelper(node.right);

        console.log(node.value);

    }
}

module.exports = BinarySearchTree;