# 03_CommonJS

### TL;DR

To get the example in this folder working, run:

```sh
bash browserifyScript.sh
```

and open `index.html` in your favorite web browser.

-------

Finally in this example we're taking advantage of an actual module format. The module format we're using is called **CommonJS**. CommonJS allows us to define a bunch of code in a module while only exposing what we want to the public. This exposed code will be what other modules can consume. To expose code from a CommonJS module in we must utilize `module.exports` which is part of the CommonJS API. The syntax in this example may seem familiar beacuse Node.js actually implements a slightly modified version of CommonJS for its modules. Let's take a look at how we'd create a couple CommonJS modules:

### Understanding `module.exports`
```js
  // myFirstModule.js

  // nobody outside of this module will have access to this function
  function somePrivateFunction() {
    // do some private stuff
  }

  function someFunctionHere() {
    // do something
  }

  // only expose `someFunctionHere` to public
  module.exports = someFunctionHere;
```

If we wanted to export multiple things from a single module we could utilize `module.exports` like this:

```js
  // mySecondModule.js

  function a() {
    // do something
  }

  function b() {
    // do something else
  }

  module.exports = {
    exposedA: a,
    exposedB: b
  }
```

Now when it comes time for us to consume code defined in the above module we can do so like this:

### Understanding `require()`
```js
  const myFirstModule = require('./myFirstModule'); // .js is not necessary
  const mySecondModule = require('./mySecondModule');
  const $ = require('jquery'); // find jquery in node_modules

  // the value of myFirstModule is the function that myFirstModule.js exported
  myFirstModule(); // will do something

  // the value of mySecondModule is the object that mySecondModule.js exported
  mySecondModule.exposedA(); // will do something
  mySecondModule.exposedB(); // will do something else
```

It is important to understand that `require()` in CommonJS modules is a synchronous call. This essentially means it expects all of the required dependencies to exist at compile time so that it won't have to make an asynchronous fetch over the web to grab something. This ends up being great for server-side tooling (Node.js) because just about everything you need will exist in your environment, probably in your `node_modules` folder. Consequently it is less fitting for client side code in the browser. This is because a lot of dependencies will need to fetched asynchronously via web requests.

To use use CommonJS in practice you must use a build tool that can read JavaScript with CommonJS symbols and resolve all of the dependencies in our application. In this example I am using the npm package **browserify**. Browserify will read in an entry JavaScript file and follow the each `require()` it encounters to resolve the dependency chain we've created. Browserify implements the topological sort algorithm under the hood so that it knows which dependencies need to be resolved in what order. Once completed, browserify will load all of the dependencies, and bundle everything in some output script. We can then include this output script in our web application. The result is a single file that can be large, but the plus side is only one web request will need to be made for it.
