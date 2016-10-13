// Sum module depends on add + reduce modules
Utils.sum = function sum(list) {
  return Utils.reduce(list, Utils.add, 0);
}
