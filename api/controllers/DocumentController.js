/**
 * DocumentController
 *
 * @description :: Server-side logic for managing documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');

module.exports = {
	documentData: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));

    res.view('landing-page', {documentData: documentData, layout: 'active-layout'});
  }
};

