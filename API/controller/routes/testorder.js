import express from 'express'
const router = express.Router();
import app from '../../testapp.js'
import orderModel from '../models/Order.js'
import orderDb from '../../dataStructure/OrderDatabase.js'

router.get('/', (req, res, next) =>{
	res.status(200).json({
		messaage: 'GET all orders',
		orderDetails: orderDb.orderArray
	});

	console.log(orderDb.orderArray);

});

router.post('/', (req, res, next) =>{
	const order ={
		orderId: req.body.orderId,
		quantity: req.body.quantity,
		productname: req.body.productname,
		status:"pending"
	};
	orderDb.storeOrder(order);
	res.status(201).json({
		messaage: 'Place a new order',
		order: order
	});
});

router.get('/:orderId', (req, res, next) =>{
	

		res.status(200).json({
			message: 'order details',
			orderId: req.params.orderId
		});

		
});

router.put('/:orderId', (req, res, next) =>{
	
	res.status(200).json({
		messaage: 'Updated order status'
	});
});

router.delete('/:orderId', (req, res) =>{

	for(i=0;i<orderDb.orderArray.length;i++){
				if(orderDb.orderArray[i].orderId==req.params.orderId){

					orderId.orderArray[i].delete(req.params.orderId)
					console.log(orderDb.orderArray[i]);

				}

			}

					
		res.status(200).json({
			message: 'order deleted',
			orderId: req.params.orderId
		});
});
module.exports = router;