"use strict"

const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {

    findAll (req, res) {
        User.find({ })
            .then(user => {
                return res.json(user);
            })
            .catch(err => res.json(err));
    },

    add (req, res) {
        User.create(req.body)
            .then(user => {
                return res.json(user);
            })
            .catch(err => res.json(err));
    },

    update(req,res){
        User.findById(req.params.id)
            .then(user => {
                user.text = req.body.text;
                return user.save();
            })
            .then(user => res.json(user))
            .catch(error => res.json(error));

        /*
        User.findOne({ _id: req.params.id })
            .then(user => {
                user.text = req.body.text;
                return user.save();
            })
            .then(user => res.json(user))
            .catch(error => res.json(error));
        */
    },

    delete (req, res) {
        User.findByIdAndRemove(req.params.id)
            .then(user => res.end("User removed"))
            .catch(err => res.json(err));
    }
}

