'use strict';

const Node = require('./node');
const Exception = require('./exception');

module.exports = class Queue {

  constructor(){
    this.front = null;
    this.back = null;
    this.count = 0;
  }

  enqueue(value){
    const newNode = new Node(value);
    this.count++;
    if(!this.front){
      this.front = newNode;
      this.back = newNode;
      return;
    }
    this.back.next = newNode;
    this.back = newNode;
  }

  dequeue(){
    if (!this.front){
      throw new Exception('no value to dequeue');
    }
    const nodeToDequeue = this.front;
    if(this.count === 1){
      this.back = null;
      this.front = null;
    }else{
      this.front = nodeToDequeue.next;
    }
    this.count--;
    return nodeToDequeue.value;
  }

  peek(){
    if (!this.front){
      throw new Exception('no value to peek');
    }
    return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }

};
