module.exports = function businessTrip(graph, cities){
  let cost = 0;
  let connectPrice;
  for (let i=0; i<cities.length-1; i++){
    connectPrice = checkConnection(graph, cost, cities[i], cities[i+1]);
    if (!connectPrice){
      return {
        connects: false, 
        cost: '$' + 0 + ' flights do not connect',
      };
    }else{
      cost += connectPrice
    }
  }
  return {
    connects: true,
    cost: '$'+cost,
  }
}

function checkConnection(graph, cost, city1, city2){
  try{
    let cityOneConnections = graph.getNeighbors(city1);
    for (connection of cityOneConnections){
      if(connection.vertex.value == city2.value){
        return connection.weight;
      }
    }
    return false;
  }catch(e){
    throw new Error(e);
  }
}
