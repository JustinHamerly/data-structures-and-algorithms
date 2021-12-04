'use strict';

module.exports = function leftJoinHashmap(hashmap1, hashmap2){
  let leftJoinArray = [];
  hashmap1.keys.forEach(key => {
    let antonym = hashmap2.get(key);
    leftJoinArray.push({
      key: key,
      keySynonym: hashmap1.get(key),
      keyAntonym: antonym,
    });
  });
  return leftJoinArray;
};
