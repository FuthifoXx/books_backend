// const userController = require('../controller/userController');
// const express = require('express');

// const userRoutes = express.Router(); //inbuilt express Router module

// userRoutes.post('/new-user', userController.createUser);
// userRoutes.post('/new-user2', userController.createUser2);
// userRoutes.post('/get-all-users', userController.getAllUsers);
// userRoutes.post('/get-one-user/:id', userController.getOneById);
// userRoutes.post('/get-one-user-name', userController.getOneByName);

// module.exports = userRoutes;

const userController = require('../controller/userController');
const express = require('express');

const userRoutes = express.Router();

// userRoutes.post("/new-user" , userController.createUser)
userRoutes.post('/new-user', userController.createUser);
userRoutes.get('/get-all-users', userController.getAllUsers);
userRoutes.get('/get-one-user/:id', userController.getOneById);
userRoutes.get('/get-one-user-name', userController.getOneByName);
userRoutes.patch('/update-user/:id', userController.updateUser);
userRoutes.delete('/delete-user/:id', userController.deleteUser);
userRoutes.delete('/delete-user-name', userController.getOneAndDelete);

module.exports = userRoutes;
