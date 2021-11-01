# Stacks and Queues

Author: Justin Hamerly  

Stack and Queue classes with built in methods utilizing a Node class and an Exception class.  
Includes comprehensive tests for all methods.

## Challenge

### Node

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  * This object should be aware of a default empty value assigned to `top` when the stack is created.

### Queue

* Create a Queue class that has a front property. It creates an empty Queue when instantiated.  
  * This object should be aware of a default empty value assigned to `front` when the queue is created.  

## Approach & Efficiency

Push and enqueue methods are using constant O(1) time efficiency by using properties on the constructor

## API

### Stack Methods  

  *push*  
  Arguments: value  
  adds a new node with that value to the top of the stack with an O(1) Time performance.

  *pop*  
  Arguments: none  
  Returns: the value from node from the top of the stack  
  Removes the node from the top of the stack  
  Should raise exception when called on empty stack  

  *peek*  
  Arguments: none  
  Returns: Value of the node located at the top of the stack  
  Should raise exception when called on empty stack  

  *is empty*  
  Arguments: none  
  Returns: Boolean indicating whether or not the stack is empty.  

### Queue Methods

  *enqueue*  
  Arguments: value  
  adds a new node with that value to the `back` of the queue with an O(1) Time performance.  

  *dequeue*  
  Arguments: none  
  Returns: the value from node from the front of the queue  
  Removes the node from the front of the queue  
  Should raise exception when called on empty queue  

  *peek*  
  Arguments: none  
  Returns: Value of the node located at the front of the queue  
  Should raise exception when called on empty stack  

  *is empty*  
  Arguments: none  
  Returns: Boolean indicating whether or not the queue is empty

## Links

[Node Class](./classes/node.js)

[Exception Class](./classes/exception.js)

[Stack Class](./classes/stack.js)  
[Stack Tests](./__tests__/stack.test.js)  

[Queue Class](./classes/queue.js)  
[Queue Tests](./__tests__/queue.test.js)  
