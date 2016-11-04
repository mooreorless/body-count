'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _easyimage = require('easyimage');

var _easyimage2 = _interopRequireDefault(_easyimage);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _routes = require('./server/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var app = (0, _express2.default)();
// set up dev and production ports
var port = 3001;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use((0, _serveFavicon2.default)(__dirname + '/assets/favicon.ico'));
app.use(_express2.default.static(__dirname + '/assets'));
app.use(_express2.default.static(__dirname + '/dist'));

app.use('/', _routes2.default);

app.listen(port, function () {
  console.log('Server running on port: ' + port);
});