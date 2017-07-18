"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory

const user = require('./../../app/http/controllers/user');
const todo = require('./../../app/http/controllers/todo');
const randomUser = require('./../../app/http/controllers/randomUser');
const randomUserTodo = require('./../../app/http/controllers/randomUserTodo');


// All the user related routes here
router.post('/user', user.create);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);
router.get("/user/:id", user.getUser);
router.get("/users", user.getAllUser);



//All Todos for a user
router.post('/user/:userId/todo',todo.create);
router.delete('/user/:userId/todo',todo.delete);
router.get('/user/:userId/todo',todo.read);
router.put('/user/:userId/todo',todo.update);

//All RandomUsers
router.post('/user/identity',randomUser.create);

//All todos for a user
router.post('/user/identity/:id/todo',randomUserTodo.create);
router.delete('/user/identity/:id/todo',randomUserTodo.delete);

// Export the router from here

module.exports = router;
