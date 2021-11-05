'use strict';

const Node = require('./node');
const Exception = require('./exception');

class BinaryTree {

  constructor(){
    this.root = null;
  }

  preOrder(){

    let current = this.root;
    let arr = [];
    this.doPreOrder(current, arr);
    return arr;

  }

  doPreOrder(current, arr){
    arr.push(current.value);
    if (current.left){
      this.doPreOrder(current.left, arr);
    }
    if (current.right){
      this.doPreOrder(current.right, arr);
    }

  }

  inOrder(){

    let current = this.root;
    let arr = [];
    this.doInOrder(current, arr);
    return arr;

  }

  doInOrder(current, arr){

    if(current.left){
      this.doInOrder(current.left, arr);
    }
    arr.push(current.value);
    if (current.right){
      this.doInOrder(current.right, arr);
    }

  }

  postOrder(){

    let current = this.root;
    let arr = [];
    this.doPostOrder(current, arr);
    return arr;

  }

  doPostOrder(current, arr){

    if(current.left){
      this.doPostOrder(current.left, arr);
    }
    if (current.right){
      this.doPostOrder(current.right, arr);
    }
    arr.push(current.value);

  }

}

class BST extends BinaryTree{

  constructor(){
    super();
  }

  add(value){
    if (!this.root){
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while(current){
      if (current.value > value){
        if(current.left){
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      }else{
        if(current.right){
          current = current.right;
        }else{
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  contains(value){
    let current = this.root;
    while(current){
      if(current.value === value){
        return true;
      }
      if (current.value > value){
        if(current.left){
          current = current.left;
        } else {
          return false;
        }
      }else{
        if(current.right){
          current = current.right;
        }else{
          return false;
        }
      }
    }
  }

}

module.exports = {
  BinaryTree,
  BST,
};
