'use strict';

const PseudoQueue = require('../classes/pseudoQueue');

describe('testing pseudoQueue functions', () => {

  it('can successfully enqueue into the pseudoqueue', ()=> {
    const newQueue = new PseudoQueue;
    newQueue.enqueue(10);
    expect(newQueue.count).toBe(1);
    expect(newQueue.front).toBeTruthy();
    expect(newQueue.back).toBeTruthy();
    expect(newQueue.front.value).toBe(10);
  });

  it('can successfully enqueue multiple values into a pseudoqueue', () => {
    const newQueue = new PseudoQueue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    expect(newQueue.count).toBe(3);
    expect(newQueue.front.value).toBe(10);
    expect(newQueue.back.value).toBe(30);
  });

  it('can successfully dequeue out of a pseudoqueue the expected value', () => {
    const newQueue = new PseudoQueue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    newQueue.dequeue();
    expect(newQueue.count).toBe(2);
    expect(newQueue.front.value).toBe(20);
    expect(newQueue.dequeue()).toBe(20);
  });

  it('can successfully empty a pseudoqueue after multiple dequeues', () => {
    const newQueue = new PseudoQueue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue).toBeTruthy();
    expect(newQueue.front).toBeFalsy();
    expect(newQueue.back).toBeFalsy();
  });

  it('can successfully instantiate an empty pseudoqueue', () => {
    const newQueue = new PseudoQueue;
    expect(newQueue.front).toBeFalsy();
    expect(newQueue.back).toBeFalsy();
    expect(newQueue).toBeTruthy();
  });

  it('calling dequeue on empty pseudoqueue raises exception', () => {
    const newQueue = new PseudoQueue;
    expect(() => {newQueue.dequeue();}).toThrowError('no value to dequeue');
  });

});
