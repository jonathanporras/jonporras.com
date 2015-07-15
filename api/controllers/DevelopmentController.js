/**
 * DevelopmentController
 *
 * @description :: Server-side logic for managing Developments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');

module.exports = {
	devData: function(req, res) {
		var devWork = JSON.parse(fs.readFileSync('data/devWork.json', 'utf8'));

		res.view('development', {devWork: devWork, layout: 'active-layout'});
	}
};

