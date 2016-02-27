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
  },

  documents: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));

    res.view('documents-index', {documentData: documentData, layout: 'active-layout'});
  },

  documentsFiltered: function(req, res) {
    var documentData = JSON.parse(fs.readFileSync('data/documents.json', 'utf8')),
        filteredDocuments = [],
        slug = req.params.slug,
        singleDocument,
        category = req.params.category;

    if (category) {
      filteredDocuments = documentData.filter(function (singleDocument) {
        return singleDocument.category === category;
      });
    } else {
      filteredDocuments = documentData.filter(function (sinlgeDocument) {
          return sinlgeDocument.slug === slug;
      });
    }

    res.view('documents-index', {documentData: filteredDocuments, layout: 'active-layout'});
  }
};


