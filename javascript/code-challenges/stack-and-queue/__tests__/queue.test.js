'use strict';

const Queue = require('../classes/queue');

describe('testing Queue class functions', () => {

  it('can successfully enqueue into a queue', () => {
    const newQueue = new Queue;
    newQueue.enqueue(10);
    expect(newQueue.count).toBe(1);
    expect(newQueue.front).toBeTruthy();
    expect(newQueue.back).toBeTruthy();
    expect(newQueue.front.value).toBe(10);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    expect(newQueue.count).toBe(3);
    expect(newQueue.front.value).toBe(10);
    expect(newQueue.back.value).toBe(30);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    newQueue.dequeue();
    expect(newQueue.count).toBe(2);
    expect(newQueue.front.value).toBe(20);
    expect(newQueue.dequeue()).toBe(20);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new Queue;
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    expect(newQueue.peek()).toBe(10);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new Queue;
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

  it('can successfully instantiate an empty queue', () => {
    const newQueue = new Queue;
    expect(newQueue.front).toBeFalsy();
    expect(newQueue.back).toBeFalsy();
    expect(newQueue).toBeTruthy();
  });

  it('calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new Queue;
    expect(() => {newQueue.dequeue();}).toThrowError('no value to dequeue');
    expect(() => {newQueue.peek();}).toThrowError('no value to peek');
  });

  it('can determine if queue is empty', () => {
    const newQueue = new Queue;
    expect(newQueue.isEmpty()).toBe(true);
    newQueue.enqueue(10);
    expect(newQueue.isEmpty()).toBe(false);
  });

});
