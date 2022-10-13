const Exception = require('./exception');
const Node = require('./knode');
const Ktree = require('./karytree');

module.exports = function fizzbuzzTree(tree) {
  if (!tree.root) {
    throw new Exception('No nodes in tree');
  }
  let newTree = new Ktree;
  newTree.root = new Node(changeValueFB(tree.root.value));
  createNewTree(tree.root, newTree.root);
  return newTree;
};

function createNewTree(originalNode, newNode) {
  if (!originalNode.children.length) {
    return;
  }
  for (let originalChild of originalNode.children) {
    let newChild = new Node(changeValueFB(originalChild.value));
    newNode.children.push(newChild);
    let index = newNode.children.length - 1;
    createNewTree(originalChild, newNode.children[index]);
  }
}

function changeValueFB(value) {
  if (value % 15 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return value.toString();
  }
}
