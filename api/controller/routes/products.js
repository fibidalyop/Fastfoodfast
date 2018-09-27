import express from 'express'
const router = express.Router();


router.get('/', (req, res, next) =>{
	res.status(200).json({
		messaage: 'Handling GET request to /products'
	});
});

router.post('/', (req, res, next) =>{
	const product ={
		name: req.body.name,
		price: req.body.price
	};


	res.status(201).json({
		messaage: 'Handling POST request to /products',
		createdProuct: product
	});
});

router.get('/:productId', (req, res, next) =>{
	const id = req.params.productId;
	if(id=== 'special'){
		res.status(200).json({
			message: 'you discovered the special ID',
			id: id
		});
	}else {
		res.status(200).json({
			message: 'you passed an ID'
		});
	}
});

router.patch('/:productId', (req, res, next) =>{
	res.status(200).json({
		messaage: 'Updated product'
	});
});

router.delete('/:productId', (req, res, next) =>{
	res.status(200).json({
		messaage: 'Deleted product'
	});
});
module.exports = router;
