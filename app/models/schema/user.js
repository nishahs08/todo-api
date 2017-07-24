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

		"todos" : [
			{
				title: {
					type: String,
					default: null
				},
				description: {
					type: String,
					default: null
				},
				status: {
					type: String,
					enum: ['pending', 'completed'],
					default: 'pending'
				},
				archived: {
					type: Boolean,
					default: false
				},
				dateAdded: {
					type: Date,
					default: Date.now()
				}
			}
		]
	},
	{
		timestamps: true,
		versionKey: false
	}
);

function _hashPassword (password) {
    let a = _hash.generateHashSyncFor(password);
	console.log('inside hash password', a);
	return a;
}

module.exports = UserSchema;