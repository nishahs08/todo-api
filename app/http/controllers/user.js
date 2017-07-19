"use strict";

const User = require('./../../models/user');
const _hash = require('./../helper/hash');
const validator = require("email-validator");
module.exports = {
    
    getUserId (req, res) {

        /*
        * While creating a random id for a random user, we also save that to database
        * Then we provide our client the _id generated by mongoose. This way it becomes easy to later update user.
        */
        
        let ip = req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;
        
        let reqTime = Date.now();
        let idString = _hash.generateRandomString({ip, reqTime});

        User.create({ custom_id: idString })
            .then(user => res.json({
                data: user._id,
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

    update (req, res) {
        /*
        * Expects the data given to be anything buy not todos.
        * For updating todos we will have separate controllers.
        * This will only update user data such as email, password.
        */
        let data = req.body;

        if (data.todos)
            delete data.todos;

        User.findById(req.params.userId)
            .then(user => {
                for (let key in data) {
                    user[key] = data[key];
                }
                return user.save();
            })
            .then(user => res.json({
                data: user,
                success: true,
                message: 'User updated'
            }))
            .catch(err => res.status(500).json({
                error: {
                    code: err.code || 'E_SERVER_ERROR',
                    message: err.message || 'Something bad happened'
                },
                success: false
            }));
    },

    delete (req, res) {
        User.findByIdAndRemove(req.params.userId)
            .then(user => res.json({
                data: null,
                success: true,
                message: 'User deleted'
            }))
            .catch(err => res.status(500).json({
                error: {
                    code: err.code || 'E_SERVER_ERROR',
                    message: err.message || 'Something bad happened'
                },
                success: false
            }))
    }
};


