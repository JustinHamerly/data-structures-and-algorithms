const Queue = require('../../stack-and-queue/classes/queue');
const Exception = require('./exception');

module.exports = function breadthFirst(tree){
  if (tree.root === null){
    throw new Exception('No values in tree');
  }
  let breadthqueue = new Queue;
  let arr = [];
  breadthqueue.enqueue(tree.root);
  return _breadthFirst(breadthqueue, arr);
};

function _breadthFirst(queue, arr){
  while (queue.front){
    let front = queue.dequeue();
    arr.push(front.value);
    if(front.left){
      queue.enqueue(front.left);
    }
    if(front.right){
      queue.enqueue(front.right);
    }
  }
  return arr;
}
