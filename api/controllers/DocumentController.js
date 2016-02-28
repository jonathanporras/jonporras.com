/**
 * DocumentController
 *
 * @description :: Server-side logic for managing documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var capitalize = require('../lib/util/capitalize').capitalize;

module.exports = {
	documentData: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));
    return res.view('landing-page', {documentData: documentData, capitalize: capitalize, layout: 'active-layout'});
  },

  documents: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));
    return res.view('documents-index', {documentData: documentData, capitalize: capitalize, layout: 'active-layout'});
  },

  documentsFiltered: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8')),
        filteredDocuments = [],
        slug = req.params.slug,
        category = req.params.category,
        resView;

    if (category) {
      filteredDocuments = documentData.filter(function (singleDocument) {
        return singleDocument.category === category;
      });
      resView = 'documents-index';
    } else {
      filteredDocuments = documentData.filter(function (singleDocument) {
          return singleDocument.slug === slug;
      });
      resView = 'documents-show';
    }
    return res.view(resView, {documentData: filteredDocuments, capitalize: capitalize, layout: 'active-layout'});
  }
};


