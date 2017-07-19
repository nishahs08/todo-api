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

    create(req, res){
        User.findByIdAndUpdate(
        req.params.userId,
        {$push: {"todos": {title: req.body.title, description : req.body.description ,status :req.body.status,archived:req.body.archived}}},
        {safe: true, upsert: true, new : true})
        .then(user => res.json({
                data: user,
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

    update(req, res) {
        
    },

    delete (req, res) {

    }
}