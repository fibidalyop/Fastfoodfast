import express from 'express'
const app = express();

import morgan from 'morgan'


import bodyParser from 'body-parser'
import orderRoutes from './controller/routes/testorder'
import productRoutes from './controller/routes/products'



app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/v1/orders', orderRoutes);

app.use('/api/v1/products', productRoutes);


app.use((req, res, next) =>{
	const error = new Error('Not found');
	error.status(404);
	next(error);
})

app.use((error, req, res, next) =>{
res.status(error.status || 500);
res.json({
	error:{
		message: error.message
	}
});
});

module.exports = app;
