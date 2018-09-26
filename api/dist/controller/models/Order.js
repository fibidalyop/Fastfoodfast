"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function Order(productName, quantity, orderId) {
	_classCallCheck(this, Order);

	this.productName = productName;
	this.quantity = quantity;
	this.orderId = orderId;
};

module.exports = Order;