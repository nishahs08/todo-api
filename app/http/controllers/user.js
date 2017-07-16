"use strict";

const User = require('./../../models/user');

module.exports = {
    create (req, res) {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password) // This if condition deals with error
            res.statusCode(400).json({
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
    }
};