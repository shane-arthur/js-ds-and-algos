/////////
// BST //
/////////

const BinarySearchTree = require('./data-structures/trees/binary-tree');

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(2);
bst.insert(100);
bst.insert(23);
bst.insert(33);

bst.traverseInOrder();
bst.traversePostOrder();

console.log(`Does 3 Exist : ${bst.findNode(3)}`); // true;
console.log(`Does 5 exist : ${bst.findNode(5)}`); // false;

bst.remove(3);

console.log(`Does 3 Exist : ${bst.findNode(3)}`); // true;

/////////////////////////
// Prime Number Search //
/////////////////////////

const isPrime = require('./algorithims/numbers');

console.log(`Is 31 Prime: ${isPrime(31)}`);

////////////
// Matrix //
////////////

const spiralPrint = require('./algorithims/arrays').spiralPrint;

let Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralPrint(Matrix));

Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(spiralPrint(Matrix));

////////////////////
// Binary Search //
///////////////////

const Searches = require('./algorithims/searching');
const { binarySearch } = Searches;

const arr = [];

for (let i = 0; i < 100; i++){
    arr[i] = i+3;
}

const index = 44;
const result = binarySearch(arr, 44);

console.log(`Expected Index from Binary Search is 41 :  ${result}`  )
