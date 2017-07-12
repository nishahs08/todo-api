"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory
const base = require('./../../app/http/controllers/base');

// Define all the routes here
router.put("/find", base.editTodo);
router.post("/add", base.addTodo);
router.put("/update", base.updateTodo);
router.put("/update3", base.findAndUpdate);

// Export the router from here
module.exports = router;
