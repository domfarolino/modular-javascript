// Main driver

// Might use `require` here to kick off our app
require(['./sum', 'jquery'], function(sum, $) {
  console.log('Cool, jQuery (', $, ') was loaded asynchronously before we got here');
  let nums = [1, 2, 3, 4, 5];
  let result = sum(nums);

  require(['jquery'], function($) {
    console.log('Since we\'ve already loaded $ one time here, RequireJS',
      'knows we do not need to re-fetch it from the CDN and refrains from',
      'making subsequent requests. Check the network tab!'
    );
  });

  document.getElementById('output').innerHTML = result;
});
