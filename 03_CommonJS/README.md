# 03_CommonJS

### TL;DR

To get the example in this folder working, run:

```sh
bash browserifyScript.sh
```

and open `index.html` in you're favorite web browser.

-------

Finally in this example we're taking advantage of an actual module format. The module format we're
using is called **CommonJS**. CommonJS allows us to define all the code we want in a specific module, but
only the code we export becomes exposed for other modules to consume. To export code from a module in
CommonJS we must utilize `module.exports`. Let's take a look at how we'd create a couple modules:

```js
  // myFirstModule.js

  // nobody outside of this module will have access to this function
  function somePrivateFunction() {
    // do some private stuff
  }

  function someFunctionHere() {
    // do something
  }
  module.exports = someFunctionHere;
```

If we wanted to export multiple things from a single module we could utilize `module.exports` in this way:

```js
  // mySecondModule.js

  function a() {
    // do something
  }

  var b = function() {
    // do something else
  }

  module.exports = {
    exposedA: a,
    exposedB: b
  }
```

Now when it comes time for us to consume code defined in the above module we can do so like this:

```js
  const myFirstModule = require('./myFirstModule'); // .js is not necessary
  const mySecondModule = require('./mySecondModule');

  // the value of myFirstModule is the function that myFirstModule.js exported
  myFirstModule(); // will do something

  // the value of mySecondModule is the object that mySecondModule.js exported
  mySecondModule.exposedA(); // will do something
  mySecondModule.exposedB(); // will do something else
```

To use utilize CommonJS in practice you must use a build tool that can read JavaScript with CommonJS symbols
and resolve the dependencies we define. In this example I am using the npm package **browserify**. Browserify
will read in an entry JavaScript file and follow the entire dependency chain we've created. Browserify implements
the topological sort algorithm under the hood so that it knows which dependencies need to be resolved in what order.
Once completed, browserify will load all of the dependencies, and bundle everything in some output script. We can then
include this output script in our web application knowing everything has been taken care of.
