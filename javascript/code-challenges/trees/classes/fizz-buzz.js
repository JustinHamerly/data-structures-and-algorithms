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

function createNewTree(oldnode, newnode) {
  if (!oldnode.child.length) {
    return;
  }
  for (let i = 0; i < oldnode.child.length; i++) {
    let newChild = new Node(changeValueFB(oldnode.child[i].value));
    newnode.child.push(newChild);
    createNewTree(oldnode.child[i], newnode.child[i]);
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
