"use strict";

var React = require('react');

var selectDropDown = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        lable: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        values: React.PropTypes.array.isRequired,
        error: React.PropTypes.string
    },
    
    render: function() {
        var wrapperClass = "form-group";
        if(this.props.error && this.props.error.length > 0){
            wrapperClass += " " + 'has-error';
        }
        
        var createOption = function(option) {
            return (
                <option key={option.id} value={option.id} > {option.firstName} {option.lastName} </option>
            );
        };

        return (
            <div className={wrapperClass}>
                <lable htmlFor={this.props.name}>{this.props.lable}</lable>
                <div className="field">
                    <select name={this.props.name}
                            className="form-control"
                            placeholder={this.props.placeholder}
                            ref={this.props.name}
                            value={this.props.value}
                            onChange={this.props.onChange} >

                            {this.props.values.map(createOption, this)}
                    </select>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = selectDropDown;