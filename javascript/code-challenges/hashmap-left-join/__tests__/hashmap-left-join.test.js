'use strict';

const HashTable = require('../../hash-table/class/hashTable');
const leftJoinHashmap = require('../function/leftJoinHashmap.js');

describe('leftJoinHashmap tests', () => {

  it('should return an array of objects with antonym and synonym pairs', () => {
    let table1 = new HashTable(50);
    let table2 = new HashTable(50);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('outfit', 'garb');
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('flow', 'jam');

    let results = leftJoinHashmap(table1, table2);

    expect(results).toStrictEqual([{'key': 'fond', 'keyAntonym': 'averse', 'keySynonym': 'enamored'}, {'key': 'wrath', 'keyAntonym': 'delight', 'keySynonym': 'anger'}, {'key': 'outfit', 'keyAntonym': null, 'keySynonym': 'garb'}]);
  });

  it('should not add items from the 2nd hash map if the first hashmap does not have that same key', () => {

    let table1 = new HashTable(50);
    let table2 = new HashTable(50);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('flow', 'jam');

    let results = leftJoinHashmap(table1, table2);

    expect(results.length).toBe(2);
  });

  it('should create items in the array, even if there are no matching keys in the 2nd hashmap', () => {

    let table1 = new HashTable(50);
    let table2 = new HashTable(50);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('outfit', 'garb');

    let results = leftJoinHashmap(table1, table2);

    expect(results.length).toBe(3);
  });

  it('should return an empty array if there are no items in the first hashmap', () => {
    let table1 = new HashTable(50);
    let table2 = new HashTable(50);
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('flow', 'jam');

    let results = leftJoinHashmap(table1, table2);
    expect(results).toStrictEqual([]);
  });

});
