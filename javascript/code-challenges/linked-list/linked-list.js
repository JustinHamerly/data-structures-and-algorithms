'use strict';

class Node {

  constructor(value){
    this.value = value;
    this.next = null;
  }

}

class LinkedList {

  constructor(){
    this.head = null;
  }

  insert (value){
    try{
      let newNode = new Node(value);
      if (this.head === null){
        this.head = newNode;
      } else {
        let nextValue = this.head;
        this.head = newNode;
        newNode.next = nextValue;
      }
    }catch(err){
      console.error(`couldn't insert a value, ${err}`);
      throw `couldn't insert a value, ${err}`;
    }
  }

  includes(value){
    try{
      let currentNode = this.head;
      while (currentNode){
        if(currentNode.value === value){
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      return false;
    }catch(err){
      console.error(`couldn't run includes function, ${err}`);
      throw `couldn't run includes function, ${err}`;
    }
  }

  toString(){
    try{
      let string = '';
      let currentNode = this.head;
      while (currentNode){
        let valueString = `{ ${currentNode.value} } -> `;
        string = string + valueString;
        currentNode = currentNode.next;
      }
      string = string + 'NULL';
      return string;
    }catch(err){
      console.error(`couldn't run toString function, ${err}`);
      throw `couldn't run toString function, ${err}`;
    }
  }

}

module.exports = {
  LinkedList,
};
