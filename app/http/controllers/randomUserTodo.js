"use strict"

const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {
    create(req,res){
        let ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
        User.findByIdAndUpdate(req.params.randomString,{$push : {todo : req.body.todo}}).then(user =>res.json(user)).catch(error => res.json(error));
    },

    delete(req,res){
        
    }
}