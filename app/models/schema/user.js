"use strict";

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		
        
        "text" :{
            type: String

        },

		"status" : {
			type: Number,
			default:1
		}
	}
);

module.exports = UserSchema;