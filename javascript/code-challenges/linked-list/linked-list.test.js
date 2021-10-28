'use strict';

const { LinkedList, zipLists } = require('./linked-list.js');

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

  it('should return the value of the node k positions from the end of the linked list given k is a position in the middle of the list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.kthFromEnd(2)).toBe(4);
  });

  it('should return the value of the node k positions from the end of the linked list given k is the position at the end of the list (k=0) ', () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.kthFromEnd(0)).toBe(6);
  });

  it('should return the value of the node k positions from the end of the linked list given k is the length of the list ', () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.kthFromEnd(6)).toBe(undefined);
  });

  it('should return undefined if k is greater than the length of the list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    expect(list.kthFromEnd(4)).toBe(undefined);
  });

  it('should return a value if the linked list size is 1', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.kthFromEnd(0)).toBe(1);
  });

});

describe('testing zipped list functionality', () => {

  it('should be able to zip two lists of the same length', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    list2.insert(2);
    list2.append(4);
    list2.append(6);

    let zipped = zipLists(list1, list2);
    expect(zipped.count).toBe(6);
    expect(zipped.head.value).toBe(1);
    expect(zipped.tail.value).toBe(6);
  });

  it('should be able to zip two lists if the first list is longer than the 2nd list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);
    list1.append(8);
    list2.insert(2);
    list2.append(4);
    list2.append(6);

    let zipped = zipLists(list1, list2);
    expect(zipped.count).toBe(8);
    expect(zipped.head.value).toBe(1);
    expect(zipped.tail.value).toBe(8);
  });

  it('should be able to zip two lists if the second list is longer than the 1st list', () => {

    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    list2.insert(2);
    list2.append(4);
    list2.append(6);
    list2.append(7);
    list2.append(8);

    let zipped = zipLists(list1, list2);
    expect(zipped.count).toBe(8);
    expect(zipped.head.value).toBe(1);
    expect(zipped.tail.value).toBe(8);

  });

  it('should return an empty linked list if no nodes exist in either argument', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zipped = zipLists(list1, list2);
    expect(zipped.head).toBe(null);
  });

});
