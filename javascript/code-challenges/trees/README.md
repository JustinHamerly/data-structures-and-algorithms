# Trees

Author: Justin Hamerly  

Binary Tree, Binary Search tree classes with built in methods utilizing a Node class and an Exception class.  

breadth first traversal function takes in a tree and returns an array of the values by adding the tree nodes to a queue and dequeueing the values and pushing to the array.

Includes comprehensive tests for all methods.

## Challenge

### Node

* Create a Node class that has properties for the value stored in the Node, and a pointer to the left and right nodes.

### Binary Tree

* Binary Tree class with methods for depth first traversal - pre order, in order and post order.
  * Exceptions are semantic, capture-able errors.

### Queue

* Binary Search Tree class - subclass of the search tree.  Has methods for adding nodes and checking if a value is in the tree.

## Approach & Efficiency

Searching the tree is O(n) time efficiency

## API

### Binary Tree Methods  

  Three traversal methods:  

  *preOrder*  
  Arguments: head node  

  *inOrder*  
  Arguments: head node  

  *postOrder*  
  Arguments: head node  

  *findMax*  
  arguments: none  
  returns the highest value node in the tree recursively by comparing values.

### Binary Search Tree

  *add*  
  Arguments: value  
  Returns: nothing  
  Adds a new node with that value in the correct location in the binary tree. 

  *Contains*  
  Arguments: value  
  Returns: boolean  
  checks the tree for the value given.  

### Breadth First Traversal

  *breadthFirst*  
  arguments: tree  
  returns: array of tree node values in order  

## Links

[Node Class](./classes/node.js)

[Exception Class](./classes/exception.js)

[Binary Tree / Binary Search Tree](./classes/binaryTree.js)  
[Binary Tree Tests](./__tests__/binarytree.test.js)  

[breadth first traversal](./classes/breadthTraversal.js)  
[breadth first traversal tests](./__tests__/breadthTraversal.test.js)  
