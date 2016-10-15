require('./style.css'); // this will be put through the css and style loaders

document.getElementById('async-trigger').addEventListener('click', e => {
  console.log('Fetching JSON content and AMD add module asynchronously');

  // Require content asynchronously (see webpack.config.js)
  require.ensure(['file!img!./500.jpg'], function(require) {
    document.getElementById('async-img').src = require('file!img!./500.jpg');
  });

  // Require the add module asynchronously
  require(['./sum'], function (sum) {
    let nums = [1, 2, 3, 4, 5];
    let result = sum(nums);

    document.getElementById('async-output').innerHTML = result;
  });
});
