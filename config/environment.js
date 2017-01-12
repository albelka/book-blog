/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'books-blog',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        }
      },
      firebase: {
        apiKey: "AIzaSyCb8cyDE9Gs7Ql3b2cgvMWSbEh8qpL2pX8",
        authDomain: "books-blog-65b60.firebaseapp.com",
        databaseURL: "https://books-blog-65b60.firebaseio.com",
        storageBucket: "books-blog-65b60.appspot.com",
        messagingSenderId: "937406365013"
      },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
