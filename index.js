const BinarySearchTree = require('./data-structures/trees/binary-tree');

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(2);

console.log (bst.findNode(3)); // true;
console.log (bst.findNode(5)); // false;