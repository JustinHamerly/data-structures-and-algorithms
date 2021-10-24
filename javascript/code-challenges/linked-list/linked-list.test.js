'use strict';

const { LinkedList } = require('./linked-list.js');

describe('testing linked list functions', () => {

  it('can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBe(null);
  });

  it('can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(5);
    expect(list.includes(5)).toBe(true);
  });

  it('the head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    expect(list.head.value).toBe(3);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(5);
  });

  it('will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    list.insert(1);
    expect(list.includes(5)).toBe(true);
    expect(list.includes(3)).toBe(true);
    expect(list.includes(1)).toBe(true);
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    list.insert(1);
    expect(list.includes(7)).toBe(false);
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    list.insert(1);
    expect(list.toString()).toBe('{ 1 } -> { 3 } -> { 5 } -> NULL');
  });

});
