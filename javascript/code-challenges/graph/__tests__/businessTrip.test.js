'use strict';

const Graph = require('../graph');
const businessTrip = require('../businessTrip');

describe('testing business trip function', () => {

  it('should return true and a price if the trip connects', () => {
    let graph = new Graph();
    
    let seattle = graph.addVertex('seattle');
    let portland = graph.addVertex('portland');
    let vancouver = graph.addVertex('vancouver');
    
    let cities = [vancouver, seattle, portland]
    
    graph.addDirectedEdge(vancouver, seattle, 50);
    graph.addDirectedEdge(seattle, vancouver, 50);
    graph.addDirectedEdge(seattle, portland, 50);
    graph.addDirectedEdge(portland, seattle, 50);

    const flight = businessTrip(graph, cities);

    expect(flight.connects).toBe(true);
    expect(flight.cost).toBe('$100');
  });

  it('should return false and a price of 0 if the trip doesn\'t connects', () => {
    let graph = new Graph();
    
    let seattle = graph.addVertex('seattle');
    let portland = graph.addVertex('portland');
    let vancouver = graph.addVertex('vancouver');
    
    let cities = [seattle, vancouver, portland]
    
    graph.addDirectedEdge(vancouver, seattle, 50);
    graph.addDirectedEdge(seattle, vancouver, 50);
    graph.addDirectedEdge(seattle, portland, 50);
    graph.addDirectedEdge(portland, seattle, 50);

    const flight = businessTrip(graph, cities);

    expect(flight.connects).toBe(false);
    expect(flight.cost).toBe('$0 flights do not connect');
  });

  it('should throw an error if a city is not in the graph', () => {
    let graph = new Graph();
    
    let seattle = graph.addVertex('seattle');
    let portland = graph.addVertex('portland');
    let vancouver;
    
    let cities = [seattle, vancouver, portland]
    
    graph.addDirectedEdge(seattle, portland, 50);
    graph.addDirectedEdge(portland, seattle, 50);

    expect(() => businessTrip(graph, cities)).toThrow();
  });

});
