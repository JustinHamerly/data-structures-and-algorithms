'use strict';

const HashTable = require('../class/hashTable');

describe('Hashtable function tests', () => {

  it('can create a hash table', () => {
    const table = new HashTable(6);
    expect(table).toBeTruthy();
  });

  it('can add a key, value pair to the hash table', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    let i = table.hash('Ghost');
    let result = table.map[i];
    expect(result.head.value).toStrictEqual({'Ghost': 'merauke blue tongue skink'});
  });

  it('retrieves item in table based on key', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    let result = table.get('Ghost');
    expect(result).toBeTruthy();
  });

  it('contains method returns true if item is in the table', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    expect(table.contains('Ghost')).toBe(true);
  });

  it('contains method returns false if item is not in the table', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    expect(table.contains('Chomp')).toBe(false);
  });

  it('successfully adds items in the case of collision', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    table.add('tsohG', 'a backwards lizard');
    expect(table.contains('tsohG')).toBe(true);
    let i = table.hash('Ghost');
    let result = table.map[i];
    expect(result.head.next.value).toStrictEqual({'tsohG': 'a backwards lizard'});

  });

  it('successfully retreives value in a bucket with a collision', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    table.add('tsohG', 'a backwards lizard');
    let result = table.get('tsohG');
    expect(result).toBe('a backwards lizard');
  });

  it('the get method returns null if bucket exists based on hash but no key matches', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    table.add('tsohG', 'a backwards lizard');
    let result = table.get('tshGo');
    expect(result).toBe(null);
  });

  it('the get method returns null if no bucket exists from hashed index', () => {
    const table = new HashTable(6);
    table.add('Ghost', 'merauke blue tongue skink');
    table.add('tsohG', 'a backwards lizard');
    let result = table.get('Chomp');
    expect(result).toBe(null);
  });

});
