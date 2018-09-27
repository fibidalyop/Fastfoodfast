'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productArray = require('../dataStructure/productArray');

var _productArray2 = _interopRequireDefault(_productArray);

var _uniqid = require('uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = model.express;


var productPattern = _productArray2.default.storeProduct({
	id: (0, _uniqid2.default)(),
	name: String,
	desc: String,
	price: Number
});

module.exports = models;