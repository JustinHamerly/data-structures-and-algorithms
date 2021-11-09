const {BST} = require('../classes/binaryTree');

describe('testing binary tree functions', () =>{

  it('can instantiate an empty tree', () => {
    let tree = new BST;
    expect(tree).toBeTruthy();
    expect(tree.root).toBeFalsy();
  });

  it('can add a node to an empty tree', () => {
    let tree = new BST;
    tree.add(50);
    expect(tree.contains(50)).toBeTruthy();
  });

  it('can add a left and right child to a single root node', () => {
    let tree = new BST;

    tree.add(50);
    tree.add(30);
    tree.add(70);

    expect(tree.root.left.value).toBe(30);
    expect(tree.root.right.value).toBe(70);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let tree = new BST;

    tree.add(50);
    tree.add(30);
    tree.add(70);
    tree.add(40);
    tree.add(60);
    tree.add(20);
    tree.add(80);

    let arr = tree.preOrder();

    expect(arr).toStrictEqual([50,30,20,40,70,60,80]);

  });

  it('can successfully return a collection from an inorder traversal', () => {
    let tree = new BST;

    tree.add(50);
    tree.add(30);
    tree.add(70);
    tree.add(40);
    tree.add(60);
    tree.add(20);
    tree.add(80);

    let arr = tree.inOrder();

    expect(arr).toStrictEqual([20,30,40,50,60,70,80]);

  });

  it('can successfully return a collection from a postorder traversal', () => {
    let tree = new BST;

    tree.add(50);
    tree.add(30);
    tree.add(70);
    tree.add(40);
    tree.add(60);
    tree.add(20);
    tree.add(80);

    let arr = tree.postOrder();

    expect(arr).toStrictEqual([20,40,30,60,80,70,50]);

  });

  it('returns the highest value node', () => {
    let tree = new BST;

    tree.add(50);
    tree.add(30);
    tree.add(70);
    tree.add(40);
    tree.add(100);
    tree.add(60);
    tree.add(20);
    tree.add(80);

    let result = tree.findMax();

    expect(result).toBe(100);

  });

});
