(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Add module
function add(a, b) {
  return a + b;
}

module.exports = add;

},{}],2:[function(require,module,exports){
// Main driver
// IIFE so that all of the below variables
// are thrown in the function's closure and not
// the global scope
const sum = require('./sum');

(function() {
  const nums = [1, 2, 3, 4, 5];
  const result = sum(nums);

  document.getElementById('output').innerHTML = result;
}());

},{"./sum":4}],3:[function(require,module,exports){
// Reduce module
// Reduces a list given an operation and base value
function reduce(list, op, base) {
  list.forEach(item => {
    base = op(item, base);
  });

  return base;
}

module.exports = reduce;

},{}],4:[function(require,module,exports){
// Sum module depends on add + reduce modules
const add = require('./add');
const reduce = require('./reduce');

function sum(list) {
  return reduce(list, add, 0);
}

module.exports = sum;

},{"./add":1,"./reduce":3}]},{},[2]);
