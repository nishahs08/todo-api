"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory

const user = require('./../../app/http/controllers/user');
const todo = require('./../../app/http/controllers/todo');

router.get('', function (req, res) {
    res.json('Todo API - v1');
});

router.get('/user/identity', user.getUserId);
router.put('/user/:userId', user.update);
router.delete('/user/:userId', user.delete);

router.get('/user/:userId/todos', todo.getAll);
router.post('/user/:userId/todos', todo.create);
router.put('/user/:userId/todo/:title', todo.update);
router.delete('/user/:userId/todo/:title', todo.delete);

module.exports = router;
