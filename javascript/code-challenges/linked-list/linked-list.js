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
    this.tail = null;
  }

  insert (value){
    try{
      let newNode = new Node(value);
      if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
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

  insertBefore (value, newValue){
    try{
      let newNode = new Node(newValue);
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode.value !== value){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      if(previousNode){
        previousNode.next = newNode;
      }else{
        this.head = newNode;
      }
    }catch(err){
      console.error(`couldn't insert a value before value: ${value}, ${err}`);
      throw `couldn't insert a value before value: ${value}, ${err}`;
    }
  }

  insertAfter (value, newValue){
    try{
      let newNode = new Node(newValue);
      let currentNode = this.head;
      let nextNode = currentNode.next;
      while (currentNode.value !== value){
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
      newNode.next = nextNode;
      currentNode.next = newNode;
    }catch(err){
      console.error(`couldn't insert a value after value: ${value}, ${err}`);
      throw `couldn't insert a value after value: ${value}, ${err}`;
    }
  }

  append (value){
    let newNode = new Node(value);
    try{
      if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
      }else{
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }catch(err){
      console.error(`couldn't append linked list, ${err}`);
      throw `couldn't append linked list, ${err}`;
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
