'use strict';

const Vertex = require('./vertex.js');
const DirectedEdge = require('./graphDirectedEdge.js');

module.exports = class Graph {

  constructor(){
    this.edges = new Map();
    this.vertices = new Set();
  }

  addVertex(value){
    const newVertex = new Vertex(value);
    this.edges.set(newVertex, []);
    this.vertices.add(newVertex);
    return newVertex;
  }

  addDirectedEdge(start, end, weight){
    if(!this.edges.has(start) || !this.edges.has(end)){
      throw new Error('invalid vertices');
    }
    const newEdge = new DirectedEdge(end, weight);
    const neighbors = this.edges.get(start);
    neighbors.push(newEdge);
  }

  getVertices(){
    return this.vertices.values();
  }

  getNeighbors(vertex){
    return this.edges.get(vertex);
  }

  getSize(){
    return this.vertices.size;
  }

};

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

// console.log(graph.getSsize());
