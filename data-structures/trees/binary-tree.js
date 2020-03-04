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
                // do nothing for already existing node
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

BinarySearchTree.prototype.traversePostOrder = function () {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node){
        if (node.left)
        traversePostOrderHelper(node.left);
        if (node.right)
        traversePostOrderHelper(node.right);

        console.log(node.value);

    }

}

module.exports = BinarySearchTree;