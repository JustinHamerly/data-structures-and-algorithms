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

  kthFromEnd(k){
    try{
      if(k === 0){
        return this.tail.value;
      }
      if(k < 0){
        return console.log('input should be a positive integer');
      }
      let counter = 0;
      let currentNode = this.head;
      while (currentNode){
        counter = counter + 1;
        currentNode = currentNode.next;
      }
      let position = counter - k;
      if(position<1){
        return console.log(`linked list has less than ${k} nodes`);
      }
      currentNode = this.head;
      for(let i=1; i<position; i++){
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }catch(err){
      console.error(`couldn't find node ${k} places from end of linked list, ${err}`);
      throw `couldn't find node ${k} places from end of linked list, ${err}`;
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
