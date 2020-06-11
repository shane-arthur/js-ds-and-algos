/* Sample DOM structure
<div id="root2">
  <div class="a" id="a-1">
    <div class="b" id="b-1">
      <div class="c" id="c-1"></div>
      <div class="c" id="c-2"></div>
    </div>
  </div>
</div>
*/

// const root2 = document.getElementById('root2')
// getByClassNameHierarchy(root2, 'a>b') --> [b-1]
// getByClassNameHierarchy(root2, 'b>a') --> []
// getByClassNameHierarchy(root2, 'a>b>c') --> [c-1, c-2]

window.addEventListener('load', () => {

    const root2 = document.getElementById('root2');
    console.log(getClassNameHierarchy(root2, 'a>b>c'));

});


function getClassNameHierarchy(root, path) {

    const classes = path.split('>').reverse();
    const output = [];
    traversalHelper(root, classes);
    return output;

    function traversalHelper(node, classes) {
        const val = classes.pop();
        for (const childNode of node.childNodes.values()) {
            if (childNode.nodeType === 1) {
                if (childNode.getAttribute('class') === val) {
                    if (classes.length === 0) {
                        output.push(childNode.getAttribute('id'))
                    }
                    traversalHelper(childNode, classes);
                }

            }
        }
    }
}


// * Sample DOM structure
// <div class='a' id="root">
//   <div class='b' id='b-1'>
//     <div class='a' id='a-2'>
//       <div class='d' id='d-1'></div>
//     </div>
//     <div class='c' id='c-1'>
//       <div class='a' id='a-3'>
//       <div>
//       <div></div></div>
//         <div class='d' id='d-2'></div>
//       </div>
//     </div>
//   </div>
// </div>

const root = document.getElementById('root')
console.log(getByClassName(root, 'c'));
console.log(getByClassName(root, 'd'));

function getByClassName(root, className) {

    const output = [];
    const stack = [];
    stack.push(root);

    while (!!stack.length) {
        const node = stack.pop();
        const children = node.children;
        for (const child of children) {
            if (child.getAttribute('class') === className) {
                output.push(child.getAttribute('id'));
            }
            stack.push(child);
        }
    }

    return output;
}