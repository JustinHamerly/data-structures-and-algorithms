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

  it('can properly append a value at the tail of the linked list, and can append multiple times', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    list.insert(1);
    list.append(7);
    expect(list.tail.value).toBe(7);
    list.append(9);
    expect(list.tail.value).toBe(9);
  });

  it('can insert a node immediately before the first node with the inputted value, including the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(3);
    list.insert(1);
    list.insertBefore(5, 4);
    expect(list.head.next.next.value).toBe(4);
    expect(list.head.next.value).toBe(3);
    expect(list.head.next.next.next.value).toBe(5);
    list.insertBefore(1, 0);
    expect(list.head.value).toBe(0);
    expect(list.head.next.value).toBe(1);
  });

  it('can insert a node immediately after the first node with the inputted value, including after the last node in the linked list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    list.insertAfter(1, 2);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
    list.insertAfter(3, 4);
    expect(list.head.next.next.next.value).toBe(4);
    expect(list.head.next.next.next.next).toBe(null);
  });

});
