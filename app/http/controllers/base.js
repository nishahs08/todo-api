"use strict"

const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {

    //find all users

    // index(req,res) {
    //     User.find({})
    //     .then(users => res.json(users))
    //     .catch(error => res.json(error));
    // },

    //create users

    // createUser(req,res){
    //     User.create({email : req.body.email,password : req.body.password,text : req.body.text})
    //     .then(user => res.json(user))
    //     .catch(error => res.json(error));

    // }

    addTodo(req,res){
        console.log("hello");
        User.create({text : req.body.text})
        .then(user => res.json(user)
        .catch(error => res.json(error)));
    },

    editTodo(req,res){
        User.find({ _id : req.body._id,status : 0})
        .then(user => res.json(user))
        .catch(error => res.json(error));
        

        
    },

    updateTodo(req,res){
        User.findOneAndUpdate({ _id : req.body._id},{$set: { status: 0 }})
        .then(user => res.json(user))
        .catch(error => res.json(error));
        
    }

}

