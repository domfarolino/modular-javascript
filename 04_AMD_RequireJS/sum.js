// Sum module depends on add + reduce modules
define(['./add', './reduce'], function(add, reduce) {

  require(['jquery'], function($) {
    console.log('At this point we have already asked RequireJS for the',
      'jquery dependency, so when we ask for it in here, it will know it',
      'does not need to re-fetch from the CDN. Check the network tab!'
    );
  });

  return function sum(list) {
    return reduce(list, add, 0);
  }
});
