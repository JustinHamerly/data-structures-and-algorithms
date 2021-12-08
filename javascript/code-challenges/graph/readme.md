# Graph Data Structure

## Description

This graph data structure implementation is represented as an adjacency list.  The class can use built in functions to add nodes, add connections to nodes, retrieve nodes in the graph, retreive the neighbors in a node, as well as tell us the size of the graph.

>Table of Contents
>
> 1. [graph class](./graph.js)
> 2. [graph class tests](./__tests__/graph.test.js)  

## Methods

### **addVertex(val)**

> *Add a vertex to the graph*
>
> *efficiency and approach*:
>
> - Arguments: value
> - Returns: The added vertex

### **addEdge(vertex1, vertex2, weight)**

> *Adds a new edge between two vertices in the graph*  
> *If specified, assign a weight to the edge*  
> *Both vertices should already be in the Graph*
>
> *efficiency and approach*:
>
> - Arguments: 2 vertices to be connected by the edge, weight (optional)
> - Returns: nothing

### **getVertices()**

> *Returns all of the vertices in the graph as a collection (set, list, or similar)*
>
> *efficiency and approach*:
>
> - Arguments: none
> - Returns: Set of vertices

### **getNeighbors(vertex)**

> *Returns a collection of edges connected to the given vertex*  
> *Include the weight of the connection in the returned collection*
>
> *efficiency and approach*:
>
> - Arguments: vertex
> - Returns: collection of edges

### **size()**

> *Returns the total number of vertices in the graph*
>
> *efficiency and approach*:
>
> - Arguments: none
> - Returns: number

## Tests

### Tests for the graph test assert the following

1. vertex can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all vertic can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between vertic included
6. The proper size is returned, representing the number of vertic in the graph
7. A graph with only one vertex and edge can be properly returned
8. An empty graph properly returns null
