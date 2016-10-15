// Sum module depends on add + reduce modules
Utils.sum = list => {
  return Utils.reduce(list, Utils.add, 0);
}
