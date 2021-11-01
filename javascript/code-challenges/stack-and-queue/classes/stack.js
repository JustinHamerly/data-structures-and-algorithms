'use strict';

const Node = require('./node');
const Exception = require('./exception');

module.exports = class Stack {

  constructor(){
    this.top = null;
    this.count = 0;
  }


  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop(){
    if (!this.top){
      throw new Exception('no value to pop');
    }
    const nodeToPop = this.top;
    this.top = nodeToPop.next;
    this.count--;
    return nodeToPop.value;
  }

  peek(){
    if (!this.top){
      throw new Exception('no value to peek');
    }
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }

};
