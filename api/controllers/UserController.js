/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
	}
};

