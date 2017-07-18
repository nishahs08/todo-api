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
     console.log(randToken.generate(64)+ip)
 
     console.log(User.find(ip))
     if(User.find(ip))
     {
        res.json('already exixt');
     }else{
         User.create( { ip: ip,randomUser : randToken.generate(64)+ip});
         res.json(user);
     }
    }
}