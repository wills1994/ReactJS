"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var Toastr = require('toastr');
var _ = require('lodash');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.about();
            }
        }
    },

    getInitialState: function() {
        return {
            course: {id: '', title: '', watchHref: '', author: {id: '', name: ''}, length: '', category: ''},
            errors: {},
            dirty: false,
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id; //from the path '/course:id'

        if(courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event) { //called for every key press
        //debugger;
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    setCourseSelectState: function(event) { //called for every key press
        //debugger;
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        var selected = _.find(this.state.authors, {id: value});
        this.state.course[field] = {id: selected.id, name: selected.firstName + ' ' + selected.lastName};
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors.

        if(this.state.course.title.length < 3) {
            this.state.errors.title = 'title must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault();

        if(!this.courseFormIsValid()) {
            return;
        }

        if(this.state.course.id){
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        this.setState({dirty: false});
        Toastr.success('Course saved.');
        this.transitionTo('courses');
    },
    render: function() {
        return (
            <CourseForm 
                course={this.state.course}
                authors = {this.state.authors}
                onChange={this.setCourseState}
                onSelectChange = {this.setCourseSelectState}
                onSave={this.saveCourse} 
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;