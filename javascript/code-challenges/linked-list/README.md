# Singly-Linked List

## Problem Domain

* create a Node class
* create a LinkedList class that can create a linked list, with functions for checking for values, adding new nodes, and returning a string showing the nodes in the linked list, appending the linked list, inserting nodes before or after existing nodes, and finding/returning the node that is 'k' positions from the tail of the list.
*write tests to ensure all functions of the linked list constructor function as expected.

## Challenges

## Create a Linked List class

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

*kthFromEnd*
arguments: number (k)  
returns: node's value k places from the tail of the linked list
counts how many nodes are in the linked list, and traverses the linked list (count - k) times, and returns that value.

*Any exceptions or errors that come from your code should be semantic, capture-able errors.*

## Create a function for zipping two linked lists together

*zipLists(list1, list2)*  
takes in two arguments - two linked lists  
returns a new linked list with values alternating between the two lists, starting with the first list, and alternating back and forth.

>Example:
>Input: `list1` 1->3->5->7->Null `list2` 2->4->6->Null  
>Output `zippedList` 1->2->3->4->5->6->7->Null

works with lists of different lengths, or equal lengths

## tests to prove the following functionality

### LinkedList class

* Can successfully instantiate an empty linked list
* Can properly insert into the linked list
* The head property will properly point to the first node in the linked list
* Can properly insert multiple nodes into the linked list
* Will return true when finding a value within the linked list that exists
* Will return false when searching for a value in the linked list that does not exist
* Can properly return a collection of all the values that exist in the linked list
* Can successfully add a node to the end of the linked list
* Can successfully add multiple nodes to the end of a linked list
* Can successfully insert a node:
  * before a node located i the middle of a linked list
  * before the first node of a linked list
  * after a node in the middle of the linked list
  * after the last node of the linked list
* run kth from the end of the linked list:
  * Where k is greater than the length of the linked list
  * Where k and the length of the list are the same
  * Where k is not a positive integer
  * Where the linked list is of a size 1
  * “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

### zipLists Function

* two lists of equal lengths can zip together
* two lists of different lengths (either first or second arugment being longer) can zip together
* if both linked lists have no nodes, will return an empty linked list

## Approach & Efficiency

I used the iterative approach for the includes method and the toString within the LinkedList class.

for `.includes` and `.toString` - space is constant, time is O(n)
`zipLists()` - space is constant, time is O(n)
