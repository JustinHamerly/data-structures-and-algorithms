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
