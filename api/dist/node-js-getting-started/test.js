'use strict';

var _require = require('child_process'),
    spawn = _require.spawn;

var request = require('request');
var test = require('tape');

// Start the app
var env = Object.assign({}, process.env, { PORT: 5000 });
var child = spawn('node', ['index.js'], { env: env });

test('responds to requests', function (t) {
  t.plan(4);

  // Wait until the server is ready
  child.stdout.on('data', function (_) {
    // Make a request to our app
    request('http://127.0.0.1:5000', function (error, response, body) {
      // stop the server
      child.kill();

      // No error
      t.false(error);
      // Successful response
      t.equal(response.statusCode, 200);
      // Assert content checks
      t.notEqual(body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
      t.notEqual(body.indexOf("Getting Started with Node on Heroku"), -1);
    });
  });
});