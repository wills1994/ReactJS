"use strict";

// This file is mocking a web API by hitting hard coded data.
var authors = require('./authorData').authors;
var _ = require('lodash');

// This would be performed on the server in a real app. just stubbing in.
var _generateId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //retrun cloned copy so that the item is pased by value instead of
};

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id) {
        var author = _.find(authors, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        // pretend an ajaz call to web api is made here
        console.log('Pretend this just save the author to the DB vai AJAX call...');

        if(author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        }else{
            // Just simulating creation here.
            // The server would generate ids for new authors in a real app.
            // Cloning so copy returned is passed by value rather than by reference.
            author.id = _generateId(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;