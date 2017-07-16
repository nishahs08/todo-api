"use strict";

const User = require('./../../models/user');

module.exports = {
    create (req, res) {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password) // This if condition deals with error
            res.status(400).json({
                error: {
                    code: "E_REQUIRED_DATA_MISSING",
                    message: "Either username or password field is missing or left blank"
                }

          
            });

        User.create({
            username: username,
            password: password
        })
            .then(user => res.json(user))
            .catch(error => res.json({
                error: {
                    code: "E_INTERNAL_ERROR",
                    "message": error.message
                }
            }))
    },


    update(req,res){
        let id = req.body.id;
        let username = req.body.username;
        let password = req.body.password;
         let newUsername = req.body.newUsername;
        let newPassword = req.body.UserPassword;

         if (!username || !password || !newUsername || !newPassword) // This if condition deals with error
            res.status(400).json({
                error: {
                    code: "E_REQUIRED_DATA_MISSING",
                    message: "Either username or password field is missing or left blank"
                }

          
            });


        User.findOne({ _id:id,username :username,password :password}).then(User.update({_id : id},{$set:{username:newUsername,password:newPassword},function(err,newUser){
            if(err){
                res.json("not ypdated")
            }else{
                res.json(res)
            }
        }}))
        
    }
};