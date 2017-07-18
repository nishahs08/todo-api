"use strict";

const mongoose = require('mongoose');
const _hash = require("./../../http/helper")
const UserSchema = new mongoose.Schema(
	{
		"ip":{
			 type : String,
			 unique : true
		},
	    "randomUser" :{
			type : String,
			unique : true
		},

		"email" : {
			type :String

		},

        "username" :{
            type: String,
        },

		"password" : {
			type: String,
			set: _hashPassword
		},

		"salt" : {
			type : String,
			set : _hashSalt
		},
		// Simple todo schema. Just says that todo is an array and can contain anything.

		"todo" : {
			type: Array
		}
	}
);

function _hashPassword (password) {
    return _hash.saltHashPassword(password).passwordHash;
}

function _hashSalt (password) {
    return _hash.saltHashPassword(password).salt;
}


module.exports = UserSchema;