# 05_Modules_With_Webpack

### TL;DR

To see an example of lazy-loaded (asynchronously loaded) content thanks to webpack
run `../node_modules/webpack-dev-server/bin/webpack-dev-server.js` in the terminal
and open `index.html` in you're favorite web browser. That's it!

-------

In this example we're using the webpack module bundler. Webpack is awesome, partly because it has out of the box support for CommonJS, AMD, and ES6 JavaScript modules. Webpack can work with any of these JavaScript modules and create a single output bundle ready to be consumed by your main HTML file. Furthermore, webpack is competing with build tools such as Gulp and Grunt given its extensive list of loaders. Webpack by default is only a module bundler, however it has the ability to use different loaders to parse stylesheets, images, plain old JSON files, and much more. These loaders can be chained together to create a pipeline for static assets to flow to before they make it to the final output bundle.

### Ok cool, but can it asynchronously load modules like RequireJS?

Yes! One of the amazing parts of webpack is that it can actually asynchronously load both CommonJS and AMD modules. Asynchronously loaded modules are not something found in the CommonJS spec however webpack can do it via the practice of code-splitting. As I mentioned before, typically in simple examples we see webpack spitting out one final JavaScript bundle for your app to consume, however the idea of code splitting allows webpack to create multiple bundles for assets you wish to load asynchronously. If your AMD module wishes to load some large static asset given some condition, webpack will bundle that large asset separately from the main bundle, and serve it if the aforementioned condition is met! The same can be done with CommonJS modules!

### Ok so how can I trigger a code split?

Well since webpack supports code-splitting for CommonJS and AMD modules, naturally there are two ways to "split" your code.

### CommonJS: `require.ensure`

```js
// When webpack comes across this require.ensure call, it creates a separate bundle for the modules
require.ensure(['async-module-a', 'async-module-b'], function(require) {
  const a = require('async-module-a'); // after async-module-a is loaded above, it is synchronously available here
  const b = require('async-module-b'); // same here bro
})
```

### AMD: `require`

```js
// Nothing new here
define(['sync-module-here'], syncModule => {

  // When webpack comes across this require call, it creates a separate bundle for the modules
  require(['async-module-a', 'async-module-b'], function(asyncModuleA, asyncModuleB) {

  });

});
```

The code in the example found in this folder utilizes both methods of webpack code-splitting to make two separate bundles (just for demonstration). When we trigger an async call by pressing the `<button>` element found in the `index.html` file. We asynchronously fetch our two webpack bundles both containing data we write to the screen.

I suggest you checkout the webpack [documentation](https://webpack.github.io/docs/) for more thorough examples.