/**
 * MusicController
 *
 * @description :: Server-side logic for managing musics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');

module.exports = {
	albumList: function(req, res) {
		var data = JSON.parse(fs.readFileSync('data/albumList.json', 'utf8'));
		res.view('music', {data: data});
	}
};

