'use strict';

const { BST } = require('../../trees/classes/binaryTree');
const treeIntersection = require('../function/tree-intersection');

describe('treeIntersection tests', () => {

  it('returns a set of the intersecting values', () => {
    let tree1 = new BST();
    tree1.add(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);
    let tree2 = new BST();
    tree2.add(42);
    tree2.add(100);
    tree2.add(600);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(4);
    tree2.add(500);

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([100,160,125,200,175,350,500]);
  });

  it('if the first tree is empty an empty set will be returned.', () => {
    let tree1 = new BST();
    tree1.add(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);
    let tree2 = new BST();

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([]);
  });

  it('if the second tree is empty an empty set will be returned.', () => {
    let tree1 = new BST();
    let tree2 = new BST();
    tree2.add(42);
    tree2.add(100);
    tree2.add(600);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(4);
    tree2.add(500);

    let results = treeIntersection(tree1, tree2);

    expect(results).toStrictEqual([]);
  });

});
