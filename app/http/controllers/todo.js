"use strict"
const mongoose = require('mongoose');
const User = require('./../../models/user');

module.exports = {

    create(req,res){
       let todo1 = req.body.todo;
       let userId = req.params.userId;
       let title =req.body.title;
        let description =req.body.description;
        let status =req.body.status;
        let archived =req.body.archived;

      // Working fine
       User.findByIdAndUpdate(userId, {$push :{todo :{title : title,description : description, status:status, archived: archived}}},{new:true})
        .then(user => res.json(user))
        .catch(error => res.json(error));

    
    },

    update(req, res) {

    },

    delete (req, res) {

    }
}