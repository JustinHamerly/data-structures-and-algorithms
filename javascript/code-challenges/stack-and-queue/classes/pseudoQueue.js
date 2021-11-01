'use strict';

const Stack = require('./stack');
const Exception = require('./exception');

module.exports = class PseudoQueue {

  constructor(){
    this.front = null;
    this.back = null;
    this.stackOne = new Stack;
    this.stackTwo = new Stack;
    this.count = 0;
  }

  enqueue(value){
    this.count++;
    while (this.stackOne.top){
      let value = this.stackOne.pop();
      this.stackTwo.push(value);
    }
    this.stackOne.push(value);
    this.back = this.stackOne.top;
    this.front = this.stackOne.top;
    while(this.stackTwo.top){
      let value = this.stackTwo.pop();
      this.stackOne.push(value);
      this.front = this.stackOne.top;
    }
    // this.front = newNode;
    // this.back = newNode;
    // this.back.next = newNode;
    // this.back = newNode;
  }

  dequeue(){
    if (!this.stackOne.top){
      throw new Exception('no value to dequeue');
    }
    this.count--;
    this.front = this.stackOne.top.next;
    if(this.stackOne.top.next === null){
      this.back = null;
    }
    return this.stackOne.pop();
  }

};
