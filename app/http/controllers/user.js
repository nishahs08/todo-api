"use strict";

const User = require('./../../models/user');
const validator = require("email-validator");
module.exports = {
    create (req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;

        if (!username || !password) // This if condition deals with error
            res.status(400).json({
                error: {
                    code: "E_REQUIRED_DATA_MISSING",
                    message: "Either username or password field is missing or left blank"
                }

          
            });
            
        validator.validate_async(email, function(err, emailBoolean) {
        if(err){
            res.status(400).json({
                error: {
                    code: "E_REQUIRED_DATA_MISSING",
                    message: "Either the email is incorrect or field is missing or left blank"
                        }
                })
             }
         else if(emailBoolean === false){
                 res.status(400).json({
                     error: {
                        code: "E_REQUIRED_DATA_MISSING",
                        message: "Either the email is incorrect or field is missing or left blank"
                     }
             })}

        else {


        User.create({
            username: username,
            password: password,
            email :email
        })
            .then(user => res.json(user))
            .catch(error => res.json({
                error: {
                    code: "E_INTERNAL_ERROR",
                    "message": error.message
                }
            }))
    }
})
},
    
   


    update(req,res){
        let id = req.params.id;
        let username = req.body.username;
        let password = req.body.password;
        

         if (!username || !password ) // This if condition deals with error
            res.status(400).json({
                error: {
                    code: "E_REQUIRED_DATA_MISSING",
                    message: "Either username or password field is missing or left blank"
                }

          
            });


        User.findOne({ _id:id,username :username,password :password})
            .then(user => user.update({_id : id},{$set:{username:username,password:password}}))
            .then(user => res.json(user)).catch(error => res.json({
                error: {
                    code: "E_INTERNAL_ERROR",
                    "message": error.message
                }
            }))
        
    },

    delete(req,res){
        User.findByIdAndRemove(req.params.id).then(user=>res.json(user)).catch(error => res.json({
                error: {
                    code: "E_INTERNAL_ERROR",
                    "message": error.message
                }
            }))
    },

     getUser(req,res){
         User.findById(req.params.id).then(user=> res.json(user)).catch(err=>res.json(err));
     },

     getAllUser(req,res){
         User.find({}).then(user=> res.json(user)).catch(err=>res.json(err));
     }
               
    
};


