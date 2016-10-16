// Reduce module
// Reduces a list given an operation and base value
define([], () => {
  return (list, op, base) => {
    list.forEach(item => {
      base = op(item, base);
    });

    return base;
  }
});
