'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res, next) {
	res.status(200).json({
		messaage: 'Handling GET request to /products'
	});
});

router.post('/', function (req, res, next) {
	var product = {
		name: req.body.name,
		price: req.body.price
	};

	res.status(201).json({
		messaage: 'Handling POST request to /products',
		createdProuct: product
	});
});

router.get('/:productId', function (req, res, next) {
	var id = req.params.productId;
	if (id === 'special') {
		res.status(200).json({
			message: 'you discovered the special ID',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'you passed an ID'
		});
	}
});

router.patch('/:productId', function (req, res, next) {
	res.status(200).json({
		messaage: 'Updated product'
	});
});

router.delete('/:productId', function (req, res, next) {
	res.status(200).json({
		messaage: 'Deleted product'
	});
});
module.exports = router;