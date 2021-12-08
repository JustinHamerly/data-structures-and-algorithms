'use strict';

const Vertex = require('./vertex.js');
const DirectedEdge = require('./graphDirectedEdge.js');

class Graph {

  constructor(){
    this.edges = new Map();
  }

  addVertex(value){
    const newVertex = new Vertex(value);
    this.edges.set(newVertex, []);
    return newVertex;
  }

  addDirectedEdge(start, end, weight){
    if(!this.edges.has(start) || !this.edges.has(end)){
      throw new Error('one or more vertices doesn\'t exist');
    }
    const newEdge = new DirectedEdge(end, weight);
    const neighbors = this.edges.get(start);
    neighbors.push(newEdge);
  }

  getVertices(){
    return this.edges.values();
  }

  getNeighbors(node){
    return this.edges.get(node);
  }

  getSize(){
    return this.nodes.size;
  }

}

// let graph = new Graph();

// let vertex1 = graph.addVertex(1);
// let vertex2 = graph.addVertex(2);
// let vertex3 = graph.addVertex(3);
// let vertex4 = graph.addVertex(4);
// let vertex5 = graph.addVertex(5);
// let vertex6 = graph.addVertex(6);

// graph.addDirectedEdge(vertex1, vertex3);
// graph.addDirectedEdge(vertex1, vertex5);
// graph.addDirectedEdge(vertex3, vertex6);
// graph.addDirectedEdge(vertex4, vertex2);
// graph.addDirectedEdge(vertex4, vertex5);
// graph.addDirectedEdge(vertex4, vertex6);
// graph.addDirectedEdge(vertex5, vertex1);
// graph.addDirectedEdge(vertex5, vertex2);
// graph.addDirectedEdge(vertex6, vertex5);

// console.log(graph);

