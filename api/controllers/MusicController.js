/**
 * MusicController
 *
 * @description :: Server-side logic for managing musics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');

module.exports = {
	musicData: function(req, res) {
		var data = JSON.parse(fs.readFileSync('data/albumList.json', 'utf8'));
		
		var performances = JSON.parse(fs.readFileSync('data/performances.json', 'utf8'));

		res.view('music', {albumData: data, performances: performances});
	}
};

