// Sum module depends on add + reduce modules
define(['./add', './reduce'], (add, reduce) => {
  return list => reduce(list, add, 0);
});
