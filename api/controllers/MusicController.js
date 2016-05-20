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

		res.view('music', {albumData: data, performances: performances, layout: 'active-layout'});
	},

  performanceData: function(req, res) {
    var performances = JSON.parse(fs.readFileSync('data/performances.json', 'utf8'));

    res.view('performances', {performances: performances, layout: 'active-layout'});
  }
};

