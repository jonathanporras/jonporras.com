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
		var stripe = require("stripe")(process.env.STRIPE_KEY_TEST);
		var stripeToken = req.body.stripeToken;
		
		stripe.customers.create({
			source: stripeToken,
			plan: "test02",
			email: req.body.email

		}, function(err, customer) {
			if(err) {
				res.json({error:err});
			} else {
				User.create({
					name: req.body.name,
					address1: req.body.address_line1,
					address2: req.body.address_line2,
					city: req.body.address_city,
					state: req.body.address_state,
					zip: req.body.address_zip,
					country: req.body.address_country,
					email: req.body.email,
					password: req.body.password,
					stripecustomerid: customer.id,
					stripepaymenttoken: stripeToken
				}, function() {
					passport.authenticate('local')(req, res, function() {
				       
						res.redirect('/');
				    });
					
				});
			}	
		});

		
	}
};
