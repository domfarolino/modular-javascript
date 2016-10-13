// Sum module depends on add + reduce modules
const add = require('./add');
const reduce = require('./reduce');

function sum(list) {
  return reduce(list, add, 0);
}

module.exports = sum;
