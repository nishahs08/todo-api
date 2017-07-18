"use strict"

const mongoose = require('mongoose')
const User = require('./../../models/user');
var randToken = require('rand-token');
module.exports = {
    create(req,res){
        var ip = req.headers['x-forwarded-for'] || 
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;
 
    	User.findOne({ ip: ip })
			.then(user => {
				console.log('>>>>>>>>>', user)
				if (user) {
					res.json("Already exists");
				}
				else return User.create({ ip: ip, randomUser: randToken.generate(64)+ip })
			})
			.then(user => res.json(user))
			.catch(err => res.json(err));
    }
}