"use strict"
const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {

    create(req,res){
       let todo1 = req.body.todo;
       let userId = req.params.userId;

      // Working fine
       User.findByIdAndUpdate(userId, {$push :{todo: todo1}}, { new: true })
        .then(user => res.json(user))
        .catch(error => res.json(error));

        // But use this
    //    User.findById(userId)
    //     .then(user => {
          // Here spreading because I am expecting todos to be passed as an array from postman.
          // Using push will keep the old todos and add new to it. Above mentioned strategy will replace
          // old todos with new one, which is bad.
        //   user.todo.push(...todo1);
        //   console.log(user);
        //   return user.save();
        // })
        // .then(user => res.json(user))
        // .catch(err => res.json(err));
    },
   delete(req,res) {
let todoToBeRemoved = req.body.todo;
User.findById(req.params.userId)
.then(user => {
user.todo.splice(user.todo.indexOf(todoToBeRemoved),1);
return user.save();
})
.then(user=>res.json(user))
.catch(error=>res.json(error));
}

}