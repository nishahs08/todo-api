"use strict"
const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {

    create(req,res){
       let todo1 = req.body.todo;
       let id = req.params.id;
       


       User.findByIdAndUpdate(req.params.id, {todo: todo})
.then(user => res.json(user)).catch(error => res.json(error));

  //  User.update({ _id : req.params.id},{$push : {todo : todo1}}).then(user => res.json(user)).catch(error=>res.json(error));

}
}