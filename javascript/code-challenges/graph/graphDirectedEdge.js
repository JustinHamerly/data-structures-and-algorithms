module.exports = class DirectedEdge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || null;
  }
};
