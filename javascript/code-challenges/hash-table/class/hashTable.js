'use strict';

const { LinkedList } = require('../../linked-list/linked-list.js');

module.exports = class HashTable {

  constructor(size){
    this.size = size;
    this.map = new Array(size);
    this.keys = [];
  }

  hash(key){
    let sum = 0, remainder;
    for (let i=0; i<key.length; i++){
      sum = sum + key.charCodeAt(i);
    }
    remainder = (sum*1117) % this.size;
    return remainder;
  }

  contains(key){
    let i = this.hash(key);
    let bucketAtI = this.map[i];
    if (bucketAtI){
      return true;
    }
    return false;
  }

  get(key){
    let i = this.hash(key);
    let bucketAtI = this.map[i];
    if (bucketAtI){
      let current = bucketAtI.head;
      while(current){
        if(current.value){
          return current.value.value;
        }
        current = current.next;
      }
      return null;
    }
    return null;
  }

  add(key, value){
    let i = this.hash(key);
    let bucketAtI = this.map[i];
    let keyValue = {
      key: key,
      value: value,
    };

    if (bucketAtI){
      bucketAtI.append(keyValue);
    }else{
      let list = new LinkedList();
      list.append(keyValue);
      this.map[i] = list;
      this.keys.push(key);
    }
  }

};
