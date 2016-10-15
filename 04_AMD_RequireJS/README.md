# 04_AMD_RequireJS

### TL;DR

To get the example in this folder working, simply
open `index.html` in you're favorite web browser.
That's it!

-------

In this example we're taking advantage of a different module format called **AMD**. AMD stands for Asynchronous Module Definition and the main difference between AMD and CommonJS is how the dependencies are actually resolved. We talked about how when using CommonJS, calls to `require()` are synchronous. This means tools load all dependencies into one possibly large bundle containing everything we need. AMD on the other hand allows us to define our dependencies in such a way that they can be resolved at runtime. This asynchronous dependency resolution behavior makes more sense in the browser. This allows for things like dynamically loaded/deferred dependencies and lazy-loading. The browser consumes what it needs, and asks for the rest on the fly later. Before we start creating AMD modules let's look at the AMD API.

### Understanding `define()`
```js
define(moduleId?, dependencies?, definitionFunction)
```

To define a module, we use the `define()` function whose API is above. `moduleId` is a string, and `dependencies` is an array of dependencies. The `definitionFunction` will only get called once each dependency in the dependencies array gets resolved, which is where the asynchronous behavior comes in. The `definitionFunction` is really just a callback function. Since the first two paramters are optional, a bare minimum AMD module might look like this:

```js
// add.js
define([], () => {
  return (a, b) => a + b;
});
```

Above we've created an anonymous module with no dependencies inside `add.js`. Essentially this module is just a utility we can use in other modules when needbe. Whatever we `return` from our `definitionFunction` will be exposed to other modules that pull this in as a dependency. Think of the `return` in our `definitionFunction` as `module.exports` in a CommonJS module. Now let's take a look at the case where we list actual dependencies:

```js
// sum.js

// the sum module depends on reduce and add modules
define(['./add', './reduce'], (add, reduce) => {
  return (list) => reduce(list, add, 0);
});
```

In the above module we return a function that takes in a list and returns the sum of the list's elements. Notice in our `definitionFunction` we have two parameters. Once each dependency from our dependency array gets resolved, the return values from the dependency modules get mapped into the paramaters appearing in our `definitionFunction`. In this case right when our AMD module gets `defined` we go and fetch its dependencies, but what if we wanted to defer the fetching of these dependencies?

### Understanding `require()`

Consider the following AMD module:

```js
define(['./sum'], sum => {
  const nums = [1, 2, 3, 4, 5];
  const result = sum(nums);

  if (/* perhaps some routing condition here for our app? */) {
    require(['jquery'], $ => {
      /**
       * Obviously we don't need to define a new module inside our
       * module, but we do want to `require` jquery asynchronously
       * if and only if we actually need it.
       * For more examples on dynamically loading dependencies see
       * https://addyosmani.com/writing-modular-js/
       */
    });
  }
  document.getElementById('output').innerHTML = result;
});
```

To use modules that take advantage of the AMD API you must use some implementation such as [RequireJS](http://requirejs.org/), or Curl. In the next example I'll be using a static asset bundler called [webpack](https://webpack.github.io/) which actually works seamlessly with CommonJS, AMD, and ES2015 modules and allows for the dynamic loading of dependencies as well!
