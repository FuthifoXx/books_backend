/*
/upload-products 
/get-all-products,
/get-one-product/:id
/update-product
/delete-products
*/
const shopController = require('../controller/shopController');
const express = require('express');

const shopRoutes = express.Router();

shopRoutes.post('/new-products/:userID', shopController.createProducts);
shopRoutes.get('/get-all-products', shopController.getAll);
shopRoutes.get('/get-one-product/:id', shopController.getOneById);
shopRoutes.patch('/update-product/:id', shopController.updateProduct);
shopRoutes.delete('/delete-user-name', shopController.getOneAndDelete);

module.exports = shopRoutes;
