/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

	attributes: {
		name: {
			type: "string",
			required: true,
			minLength: 1
		},
		address1: {
			type: "string"
		},
		address2: {
			type: "string"
		},
		city: {
			type: "string"
		},
		state: {
			type: "string"
		},
		zip: {
			type: "string"
		},
		country: {
			type: "string"
		},
		email: {
			type: "email",
			required: true,
			unique: true
		},
		password: {
			type: "string",
			required: true,
			minLength: 6
		},
		stripecustomerid: {
			type: "string",
		},
		stripepaymenttoken: {
			type: "string",
		}
	},
	beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

