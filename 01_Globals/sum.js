// Sum module depends on add + reduce modules
function sum(list) {
  return reduce(list, add, 0);
}
