'use strict';

const HashTable = require('../../hash-table/class/hashTable');

module.exports = function treeIntersection(tree1, tree2){
  let intersections = [];
  let treeOneTable = new HashTable(50);

  addToTable(tree1.root, treeOneTable);
  checkIntersections(tree2.root, treeOneTable, intersections);

  return intersections;
};

function addToTable(node, treeTable){
  if (node){
    treeTable.add(node.value.toString(), node.value);
    addToTable(node.left, treeTable);
    addToTable(node.right, treeTable);
  }
  return;
}

function checkIntersections(node, treeTable, set){
  if (node){
    if (treeTable.get(node.value.toString())){
      set.push(node.value);
    }
    checkIntersections(node.left, treeTable, set);
    checkIntersections(node.right, treeTable, set);
  }
  return;
}

