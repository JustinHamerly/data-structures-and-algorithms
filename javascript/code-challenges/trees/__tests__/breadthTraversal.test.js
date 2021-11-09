const {BST} = require('../classes/binaryTree');
const Queue = require('../../stack-and-queue/classes/queue');
const breadthFirst = require('../classes/breadthTraversal');

describe('testing the breadth traversal function', () => {

  it('returns a list of the nodes in a tree with values', () => {
    let tree = new BST;
    tree.add(10);
    tree.add(20);
    tree.add(1);
    tree.add(15);
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(13);
    tree.add(18);

    let arr = breadthFirst(tree);

    expect(arr).toStrictEqual([10, 1, 20, 5, 15, 3, 7, 13, 18]);
  });

  it('an empty tree should throw an exception', () => {
    let tree = new BST;

    expect(() => {breadthFirst(tree);}).toThrowError('No values in tree');
  });

});
