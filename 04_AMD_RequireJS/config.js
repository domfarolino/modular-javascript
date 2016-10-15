requirejs.config({
  'baseUrl': './',
  'paths': {
    'main': './main',
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min'
  }
});

// Load the main app module to start the app
requirejs(['main']);
