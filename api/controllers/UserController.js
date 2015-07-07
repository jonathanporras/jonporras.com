/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	findUserByEmail: function(req, res) {
		var email = req.param('id');
		User.findOne({email:email}).exec(function(err, user) {
			if(err) {
				res.json({error:err});
			}

			if(user === undefined) {
				res.notFound();
			} else {
				res.json({notFound: false, userData:user});
			}
		});
	},

	handleSubscription: function(req, res) {
		var stripe = require("stripe")("sk_test_xXhgZSfOqRNrHI6HOvNOsk6k");
		var stripeToken = req.body.stripeToken;

		stripe.customers.create({
			source: stripeToken,
			plan: "test01",
			email: req.body.email

		}, function(err, customer) {
			if(err) {
				res.json({error:err});
			} else {
				User.create({
					email: req.body.email,
					password: req.body.password,
					stripeid: customer.id
				}, function() {
					passport.authenticate('local')(req, res, function() {
				       
						res.redirect('/');
				    });
					
				});
			}	
		});

		
	}
};
