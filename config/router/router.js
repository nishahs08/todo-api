"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory
const base = require('./../../app/http/controllers/base');
const user = require('./../../app/http/controllers/user');
const todo = require('./../../app/http/controllers/todo');

// Define all the routes here
router.get("/todos", base.findAll);
router.post("/todo", base.add);
router.put("/todo/:id", base.update);
router.delete("/todo/:id", base.delete);

// All the user related routes here
router.post('/user', user.create);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);
router.get("/user/:id", user.getUser);
router.get("/users", user.getAllUser);


//All Todos for a user
router.post('/user/:userId/todo',todo.create);
// Export the router from here
module.exports = router;
