"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory
const base = require('./../../app/http/controllers/base');
const user = require('./../../app/http/controllers/user');

// Define all the routes here
router.get("/todos", base.findAll);
router.post("/todo", base.add);
router.put("/todo/:id", base.update);
router.delete("/todo/:id", base.delete);

// All the user related routes here
router.post('/user', user.create);
router.put("/user/:id", user.update);
// Export the router from here
module.exports = router;
