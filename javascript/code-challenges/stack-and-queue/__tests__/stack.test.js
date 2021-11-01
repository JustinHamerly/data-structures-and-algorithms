'use strict';

const Stack = require('../classes/stack');

describe('testing Stack class functions', () => {

  it('can successfully push onto a stack', () => {
    const newStack = new Stack;
    newStack.push(10);
    expect(newStack.count).toBe(1);
    expect(newStack.top).toBeTruthy();
    expect(newStack.top.value).toBe(10);
  });

  it('can successfully push multiple values onto a stack', () => {
    const newStack = new Stack;
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);
    expect(newStack.count).toBe(3);
    expect(newStack.top.value).toBe(30);
    expect(newStack.top.next.value).toBe(20);
  });

  it('can successfully pop off the stack', () => {
    const newStack = new Stack;
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);
    newStack.pop();
    expect(newStack.count).toBe(2);
    expect(newStack.top.value).toBe(20);
    expect(newStack.pop()).toBe(20);
  });

  it('can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack;
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.count).toBe(0);
    expect(newStack.top).toBeFalsy();
  });

  it('can successfully peek the next item on the stack', () => {
    const newStack = new Stack;
    newStack.push(10);
    newStack.push(20);
    newStack.push(30);
    expect(newStack.peek()).toBe(30);
  });

  it('can successfully instantiate an empty stack', () => {
    const newStack = new Stack;
    expect(newStack.top).toBeFalsy();
    expect(newStack).toBeTruthy();
  });

  it('calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack;
    expect(() => {newStack.pop();}).toThrowError('no value to pop');
    expect(() => {newStack.peek();}).toThrowError('no value to peek');
  });

  it('can determine if stack is empty', () => {
    const newStack = new Stack;
    expect(newStack.isEmpty()).toBe(true);
    newStack.push(10);
    expect(newStack.isEmpty()).toBe(false);
  });

});
