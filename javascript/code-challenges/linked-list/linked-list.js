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
    this.count = 0;
  }

  insert (value){
    try{
      let newNode = new Node(value);
      if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
        this.count = this.count + 1;
      } else {
        let nextValue = this.head;
        this.head = newNode;
        newNode.next = nextValue;
        this.count = this.count + 1;
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
        this.count = this.count + 1;
      }else{
        this.head = newNode;
        this.count = this.count + 1;
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
      this.count = this.count + 1;
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
        this.count = this.count + 1;
      }else{
        this.tail.next = newNode;
        this.tail = newNode;
        this.count = this.count + 1;
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
      let position = this.count - k;
      if(position<1){
        return console.log(`linked list has less than ${k} nodes`);
      }
      let currentNode = this.head;
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

function zipLists (list1, list2){
  let zippedList = new LinkedList();
  let listOneCurrent = list1.head;
  let listTwoCurrent = list2.head;
  while(listOneCurrent && listTwoCurrent){
    zippedList.append(listOneCurrent.value);
    listOneCurrent = listOneCurrent.next;
    zippedList.append(listTwoCurrent.value);
    listTwoCurrent = listTwoCurrent.next;
  }
  while (listOneCurrent){
    zippedList.append(listOneCurrent.value);
    listOneCurrent = listOneCurrent.next;
  }
  while (listTwoCurrent){
    zippedList.append(listTwoCurrent.value);
    listTwoCurrent = listTwoCurrent.next;
  }
  return zippedList;
}

function findMeanRecursive(list){
  let sum = 0;
  let counter = 0;
  return doFindMean(list.head, sum, counter);
}

function doFindMean(node, sum, counter){
  counter ++;
  sum = sum + node.value;
  if(node.next){
    return doFindMean(node.next, sum, counter);
  }else{
    return (sum/counter);
  }
}


module.exports = {
  LinkedList,
  zipLists,
  findMeanRecursive,
};
