"use strict";

const mongoose = require('mongoose');
const _hash = require("./../../http/helper/hash")
const UserSchema = new mongoose.Schema(
	{
		"custom_id":{
			 type : String,
			 unique : true
		},

		"email" : {
			type :String,
			default: null
		},

		"password" : {
			type: String,
			default: null,
			set: _hashPassword
		},

		"salt" : {
			type : String,
			set : _hashSalt
		},
		// Simple todo schema. Just says that todo is an array and can contain anything.

		"todo" : {
			"title" : {type : String},
			"description" : {type : String},
			"status" : {
        				type: String,
        				enum : ['Pending','Completed','In Progress'],
        				default: 'Pending'
    			},
			"archived" : {type :String}
		}
	}
);

function _hashPassword (password) {
    let a = _hash.generateHashSyncFor(password);
	console.log('inside hash password', a);
	return a;
}

module.exports = UserSchema;