"use strict"

const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {
    create(req,res){
        let ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     let todo1 =req.body.todo;
     console.log(req.params.id,"dddddddddddf")
        User.findByIdAndUpdate( req.params.id , {$push : {todo : todo1}},{new:true})
        .then(user =>res.json(user))
        .catch(error => res.json(error));
    },

    delete(req,res){
        let todoToBeRemoved = req.body.todo;

        User.findById(req.params.id)
            .then(user => {
                if(user.todo.indexOf(todoToBeRemoved) === -1) {
                    return res.status(400).json({
                        error: {
                            code: "E_REQUIRED_DATA_MISSING",
                            message: "Already Deleted"
                        }
                    })
                }
                else{
                    user.todo.splice(user.todo.indexOf(todoToBeRemoved),1);
                    return user.save();
                }
            })
            .then(user => res.json(user)).catch(error => res.json(error));
    }
}