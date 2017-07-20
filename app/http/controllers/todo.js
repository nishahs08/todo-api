"use strict"
const mongoose = require('mongoose');
const User = require('./../../models/user');

module.exports = {

    getAll(req, res) {
        User.findById(req.params.userId)
        .then(user => res.json({
                data: user.todos,
                success: true,
                message: 'User created'
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
        User.findById(req.params.body)
        .then(user =>{
          user.todos.foreach( function(todo){
                if(todo.title === req.params.title){
                    todo.description =req.body.description;
                    todo.archived=req.body.archived;
                    todo.status =req.body.status;
                }
          } )
                return user.save();
           }).then(user => res.json({
                data: user,
                success: true,
                message: 'User created'
            })).catch(err => res.status(500).json({
                error: {
                    code: err.code || 'E_SERVER_ERROR',
                    message: err.message || 'Something bad happened'
                },
                success: false
            }))
    },

    delete (req, res) {
        User.findById(req.params.id)
        .then(user =>{
            user.todos.foreach(function(todo){
                 if(todo.title === req.params.title){
                     user.todos.splice(todo,1);
            }
            
            return user.save();
        })})
        .catch(err => res.status(500).json({
                error: {
                    code: err.code || 'E_SERVER_ERROR',
                    message: err.message || 'Something bad happened'
                },
                success: false
            }))
    }
}