require('./style.css'); // this will be put through the css and style loaders

document.getElementById('async-trigger').addEventListener('click', e => {
  console.info('Fetching JSON content and AMD add module asynchronously');

  // Require content asynchronously
  document.getElementById('async-img').src = require('./500.png');

  // CommonJS Async Codesplitting
  require.ensure(['./sum'], function(require) {
    const sum = require('./sum');

    const nums = [1, 2, 3, 4, 5];
    const result = sum(nums);

    document.getElementById('async-output').innerHTML = result;
  })

  // AMD Async Codesplitting
  // require(['./sum'], function(sum) {
  //   const nums = [1, 2, 3, 4, 5];
  //   const result = sum(nums);
  //
  //   document.getElementById('async-output').innerHTML = result;
  // });
});
