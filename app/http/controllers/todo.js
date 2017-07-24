"use strict"
const mongoose = require('mongoose');
const User = require('./../../models/user');

module.exports = {

    getAll(req, res) {
        User.findById(req.params.userId)
        .then(user => res.json({
            data: user.todos,
            success: true,
            message: 'User todos fetched'
        }))
        .catch(err => res.status(500).json({
            error: {
                code: err.code || 'E_SERVER_ERROR',
                message: err.message || 'Something bad happened'
            },
            success: false
        }))
    },

    create(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            {
                $push: {
                    "todos": {
                        title: req.body.title, 
                        description : req.body.description
                    }
                }
            },
            { safe: true, upsert: true, new : true }
        )
        .then(user => res.json({
            data: user,
            success: true,
            message: 'Todo added'
        }))
        .catch(err => res.status(500).json({
            error: {
                code: err.code || 'E_SERVER_ERROR',
                message: err.message || 'Something bad happened'
            },
            success: false
        }))
    },

    update(req, res) {
        User.findById(req.params.userId)
        .then(user =>{
            user.todos.forEach( function(todo){
                if(todo.title === req.params.title){
                    for (let key in req.body){
                        todo[key] = req.body[key];
                    }
                }
            })
            return user.save();
        })
        .then(user => res.json({
            data: user,
            success: true,
            message: 'User todo updated'
        }))
        .catch(err => res.status(500).json({
            error: {
                code: err.code || 'E_SERVER_ERROR',
                message: err.message || 'Something bad happened'
            },
            success: false
        }))
    },

    delete (req, res) {
        User.findById(req.params.userId)
        .then(user => {
            user.todos.forEach(function(todo,index){
               
                if(todo.title === req.params.title){
                    user.todos.splice(index,1) 
                }
                return user.save();
            })
        })
        .then(user => res.json({
            data: null,
            success: true,
            message: 'User todo deleted'
        }))
        .catch(err => res.status(500).json({
            error: {
                code: err.code || 'E_SERVER_ERROR',
                message: err.message || 'Something bad happened'
            },
            success: false
        }))
    }
}