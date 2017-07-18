"use strict";

const mongoose = require('mongoose');

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

        "username" :{
            type: String,
        },

		"password" : {
			type: String,
		},

		// Simple todo schema. Just says that todo is an array and can contain anything.

		"todo" : {
			type: Array
		}
		
		// More complex todo schema definition here. It says that todo will be an array that will contain
		// an object with keys title of type String and desc of type String.
		/*"todo" : [
			{
				title: {
					type: String
				},
				desc: {
					type: String
				}
			}
		]*/
	}
);

module.exports = UserSchema;