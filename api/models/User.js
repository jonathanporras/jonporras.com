/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	firstname: {
		type: "string",
		required: true,
		minLength: 1
	},
	lastname: {
		type: "string",
		required: true,
		minLength: 1
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
	stripeid: {
		type: "string",
		minLength: 18
	}
  }
};

