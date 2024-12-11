const bookController = require('../controller/bookController');
const express = require('express');

const bookRoutes = express.Router();

bookRoutes.post('/new-book/:userID', bookController.createBook);
bookRoutes.get('/get-one-by-name', bookController.getOneByName);
bookRoutes.get('/get-one-book/:id', bookController.getOneById);
bookRoutes.patch('/update-book/:id', bookController.updateBook);
bookRoutes.delete('/delete-book/:id', bookController.deleteBook);

module.exports = bookRoutes;
