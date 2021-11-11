const fizzbuzzTree = require('../classes/fizz-buzz');
const Node = require ('../classes/knode');
const Ktree = require('../classes/karytree');

describe('testing fizzbuzz function', () => {

  it('should return a new tree', () => {
    const tree = new Ktree;
    tree.root = new Node(15);

    let newtree = fizzbuzzTree(tree);

    expect(newtree).toBeTruthy();
  });

  it('should return FizzBuzz if the node is divisible by 3 and 5', () => {
    const tree = new Ktree;
    tree.root = new Node(15);

    let newtree = fizzbuzzTree(tree);

    expect(newtree.root.value).toBe('FizzBuzz');
  });

  it('should return Fizz if the node is divisible by 3', () => {
    const tree = new Ktree;
    tree.root = new Node(3);

    let newtree = fizzbuzzTree(tree);

    expect(newtree.root.value).toBe('Fizz');
  });

  it('should return Buzz if the node is divisible by 5', () => {
    const tree = new Ktree;
    tree.root = new Node(5);

    let newtree = fizzbuzzTree(tree);

    expect(newtree.root.value).toBe('Buzz');
  });

  it('should return a stringified number if the node is not divisible by 3 and or 5', () => {
    const tree = new Ktree;
    tree.root = new Node(2);

    let newtree = fizzbuzzTree(tree);

    expect(newtree.root.value).toBe('2');
  });

  it('should return a new tree in which all nodes are replaced with Fizz, Buzz, FizzBuzz or the stringified number', () => {
    const tree = new Ktree;
    tree.root = new Node(2);
    tree.root.child.push(new Node(15));
    tree.root.child.push(new Node(3));
    tree.root.child.push(new Node(5));
    tree.root.child[0].child.push(new Node(4));
    tree.root.child[0].child.push(new Node(10));
    tree.root.child[0].child.push(new Node(12));
    tree.root.child[1].child.push(new Node(30));

    let newtree = fizzbuzzTree(tree);

    expect(newtree.root.value).toBe('2');
    expect(newtree.root.child[0].value).toBe('FizzBuzz');
    expect(newtree.root.child[1].value).toBe('Fizz');
    expect(newtree.root.child[2].value).toBe('Buzz');
    expect(newtree.root.child[0].child[0].value).toBe('4');
    expect(newtree.root.child[0].child[1].value).toBe('Buzz');
    expect(newtree.root.child[0].child[2].value).toBe('Fizz');
    expect(newtree.root.child[1].child[0].value).toBe('FizzBuzz');
  });

});
