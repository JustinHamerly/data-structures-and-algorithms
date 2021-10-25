# Linked List



* create a Node class  
* LinkedList class that can create a linked list, with functions for checking for values, adding new nodes, and returning a string showing the nodes in the linked list.
* write tests to ensure all functions of the linked list constructor function as expected.


# Singly-Linked List

## Problem Domain

* create a Node class
* create a LinkedList class that can create a linked list, with functions for checking for values, adding new nodes, and returning a string showing the nodes in the linked list, appending the linked list, and inserting nodes before or after existing nodes.
*write tests to ensure all functions of the linked list constructor function as expected.

### Challenges

#### Create a Linked List class

Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
The class should contain the following methods:

*insert*  
Arguments: value  
Returns: nothing  
Adds a new node with that value to the head of the list with an O(1) Time performance.

*includes*  
Arguments: value  
Returns: Boolean  
Indicates whether that value exists as a Node’s value somewhere within the list.

*toString*  
Arguments: none  
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

*append*  
arguments: value  
returns: nothing  
Adds a new node with the value to the end of the linked list with O(1) time performance.

*insertBefore*  
arguments: value, newValue  
returns: nothing  
Searches for the value, and inserts a new node with the new value before the node with the searched value

*insertAfter*  
arguments: value, newValue  
returns: nothing  
Searches for the value, and inserts a new node with the new value after the node with the searched value

*Any exceptions or errors that come from your code should be semantic, capture-able errors.*

## tests to prove the following functionality:

* Can successfully instantiate an empty linked list
* Can properly insert into the linked list
* The head property will properly point to the first node in the linked list
* Can properly insert multiple nodes into the linked list
* Will return true when finding a value within the linked list that exists
* Will return false when searching for a value in the linked list that does not exist
* Can properly return a collection of all the values that exist in the linked list
* Can successfully add a node to the end of the linked list
* Can successfully add multiple nodes to the end of a linked list
* Can successfully insert a node before a node located i the middle of a linked list
* Can successfully insert a node before the first node of a linked list
* Can successfully insert after a node in the middle of the linked list
* Can successfully insert a node after the last node of the linked list

## Approach & Efficiency

I used the iterative approach for the includes method and the toString within the LinkedList class.

for includes and toString - space is constant, time is O(n)
