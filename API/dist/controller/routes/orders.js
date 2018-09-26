'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _app = require('../../app.js');

var _app2 = _interopRequireDefault(_app);

var _Order = require('../models/Order.js');

var _Order2 = _interopRequireDefault(_Order);

var _OrderDatabase = require('../../dataStructure/OrderDatabase.js');

var _OrderDatabase2 = _interopRequireDefault(_OrderDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get('/', function (req, res, next) {
	res.status(200).json({
		messaage: 'GET all orders',
		orderDetails: _OrderDatabase2.default.orderArray
	});

	console.log(_OrderDatabase2.default.orderArray);
});

router.post('/', function (req, res, next) {
	var order = {
		orderId: req.body.orderId,
		quantity: req.body.quantity,
		productname: req.body.productname,
		status: "pending"
	};
	_OrderDatabase2.default.storeOrder(order);
	res.status(201).json({
		messaage: 'Place a new order',
		order: order
	});
});

router.get('/:orderId', function (req, res, next) {
	for (i = 0; i < _OrderDatabase2.default.orderArray.length; i++) {
		if (_OrderDatabase2.default.orderArray[i].orderId == req.params.orderId) {
			console.log(_OrderDatabase2.default.orderArray[i]);
		}
	}

	res.status(200).json({
		message: 'order details',
		orderId: req.params.orderId
	});
});

router.put('/:orderId', function (req, res, next) {
	for (i = 0; i < _OrderDatabase2.default.orderArray.length; i++) {
		if (_OrderDatabase2.default.orderArray[i].orderId == req.params.orderId) {
			_OrderDatabase2.default.orderArray[i].status = req.body.status;
			console.log(_OrderDatabase2.default.orderArray[i]);
		}
	}
	res.status(200).json({
		messaage: 'Updated order status'
	});
});

router.delete('/:orderId', function (req, res) {

	for (i = 0; i < _OrderDatabase2.default.orderArray.length; i++) {
		if (_OrderDatabase2.default.orderArray[i].orderId == req.params.orderId) {

			orderId.orderArray[i].delete(req.params.orderId);
			console.log(_OrderDatabase2.default.orderArray[i]);
		}
	}

	res.status(200).json({
		message: 'order deleted',
		orderId: req.params.orderId
	});
});
module.exports = router;