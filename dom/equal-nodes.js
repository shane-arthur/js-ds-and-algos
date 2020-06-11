/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> DOM Traversal</title>
</head>
<body>
  <div id="rootA">
    <div>
      <div></div>
    </div>
    
    <div></div>
      
    
    <div>
      <div>
        <div id="nodeA"></div>
        <div></div>
      </div>
    </div>
  </div>
    
  <div id="rootB">
    <div>
      <div></div>
    </div>
    
    <div></div>
    
    <div>
      <div>
        <div id="nodeB"></div>
        <div></div>
      </div>
    </div>
  </div>
</body>
</html>

*/




const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getSymmetricNode(rootA, rootB, nodeA) {

    const stack = [];

    while (rootA !== nodeA) {
        const parentElement = nodeA.parentElement;
        const children = [...parentElement.children];
        const index = children.indexOf(nodeA);
        stack.push(index);
        nodeA = parentElement;
    }
    let returnedNode = rootB;
    while (!!stack.length) {
        returnedNode = returnedNode.children[stack.pop()];
    }

    return returnedNode;

}

const node = getSymmetricNode(rootA, rootB, nodeA);