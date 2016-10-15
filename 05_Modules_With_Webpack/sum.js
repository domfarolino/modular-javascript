// Sum module depends on add + reduce modules
define(['./add', './reduce'], function(add, reduce) {
  return function sum(list) {
    return reduce(list, add, 0);
  }
});
