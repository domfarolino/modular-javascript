// Main driver
// IIFE so that all of the below variables
// are thrown in the function's closure and not
// the global scope
(function() {
  const nums = [1, 2, 3, 4, 5];
  const result = Utils.sum(nums);

  document.getElementById('output').innerHTML = result;
}());
