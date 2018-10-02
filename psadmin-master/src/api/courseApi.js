"use strict";

// This file is mocking a web API by hitting  hard code data.
var courses = require('./courseData').courses;
var _ = require('lodash');

// This would be perfomed on the server in a real app. Just stubbing in.
var _generateId = function(course) {
    return course.title.replace(' ', '-');
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); // return cloned copy so that the item is passed by value instead of by reference
};

var CourseApi = {
    getAllCourses: function() {
        return _clone(courses);
    },

    getCourseById: function(id) {
        var course = _.find(course, {id: id});
        return _clone(course);
    },

    saveCourse: function(course) {
        console.log('imagine saving course via AJAX call...');

        if(course.id) {
            var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id}));
            courses.splice(existingCourseIndex, 1, course);
        } else {
            // just simulating creating here. This data
            // would be generated on the server in a real app.
            course.id = _generateId(course);
            courses.push(_clone(course));
        }
        return course;
    },

    deleteCourse: function(id) {
        console.log('Imagine deleting course with id of ' + id + 'via AJAX call...');
        _.remove(courses, {id: id});
    }
};

module.exports = CourseApi;