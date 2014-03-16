/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({

  render: function () {

    return (
      <li>
        <a href={this.props.href} data-color={this.props.color || 'black'}>
          <i className={this.props.icon || ''}></i>
          <div>
            {this.props.text}
          </div>
        </a>
      </li>
    );
  },
});
