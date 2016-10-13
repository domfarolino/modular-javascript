// Reduce module
// Reduces a list given an operation and base value
function reduce(list, op, base) {
  list.forEach(item => {
    base = op(item, base);
  });

  return base;
}

module.exports = reduce;
