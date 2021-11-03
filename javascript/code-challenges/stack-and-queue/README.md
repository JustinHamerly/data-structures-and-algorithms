# Stacks and Queues

Author: Justin Hamerly  

Stack, Queue and PseudoQueue classes with built in methods utilizing a Node class and an Exception class.  

AnimalShelter class with built in methods for managing Cat and Dog instances  

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

### PseudoQueue

* Create a new PseudoQueue class
  * Doesn't use existing Queue class
  * Implements standard queue interface with 2 internal Stack instances.

### AnimalShelter

* Create a class AnimalShelter which holds instances of Cat and Dog objects
  * uses a first-in first-out approach (Queues)
  * Three internal queues track cats, dogs and allAnimals.
  * Functions to add or remove cats and dogs, from relevant queues.
  * uses queue constructor [queue](./classes/queue.js)

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

### PseudoQueue Methods

  *enqueue*  
  Arguments: value  
  Inserts value into the PseudoQueue, using a *first-in, first-out* approach

  *dequeue*  
  Arguments: none  
  Extracts a value from the PseudoQueue, using a *first-in, first-out* approach
  Should raise exception when called on empty queue  

### AnimalShelter methods

  *enqueue*  
  Arguments: Cat or Dog object  
  Inserts object into either dog or cat queue, depending on their type, using a *first-in, first-out* approach (Queue)  
  Also inserts the animal object into an allAnimals queue.

  *dequeue*  
  Arguments: 'dog', 'cat' or empty  
  Extracts a dog or cat from the appropriate queues in the shelter, using a *first-in, first-out* approach (Queue)
  Raises exception when an invalid argument (animal type) is passed into the function  
  Removes oldest animal (either dog or cat) if no argument is passed into the function

## Links

[Node Class](./classes/node.js)

[Exception Class](./classes/exception.js)

[Stack Class](./classes/stack.js)  
[Stack Tests](./__tests__/stack.test.js)  

[Queue Class](./classes/queue.js)  
[Queue Tests](./__tests__/queue.test.js)  

[PseudoQueue Class](./classes/pseudoQueue.js)  
[PseudoQueue Tests](./__tests__/pseudoQueue.test.js)  

[Animal Shelter](./classes/animalshelter.js)  
[Animal Shelter Tests](./__tests__/animalshelter.test.js)
