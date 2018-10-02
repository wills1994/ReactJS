"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/selectDropDown');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSelectChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input 
                    name="title"
                    lable="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />

                <Select 
                    name="author"
                    lable="Author"
                    selected={this.props.course.author.id}
                    value={this.props.course.author.name}
                    values= {this.props.authors}
                    onChange={this.props.onSelectChange}
                    error={this.props.errors.title} />
                
                <Input 
                    name="category"
                    lable="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange} 
                    error={this.props.errors.category}/>

                <Input 
                    name="length"
                    lable="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange} 
                    error={this.props.errors.length}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;