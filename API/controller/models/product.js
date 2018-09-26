import express from 'express'
import productArray from '../dataStructure/productArray'
const model = model.express
import uniqid from 'uniqid'

const productPattern = productArray.storeProduct({
	id: uniqid(),
	name: String,
	desc: String,
	price: Number
})

module.exports = models;