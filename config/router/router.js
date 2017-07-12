"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory
const base = require('./../../app/http/controllers/base');

// Define all the routes here
router.get("/todos", base.findAll);
router.post("/todo", base.add);
router.put("/todo/:id", base.update);
router.delete("/todo/:id", base.delete);

// Export the router from here
module.exports = router;
