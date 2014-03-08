/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({

  render: function () {

    return (
      <a href={this.props.href}>
        <li className="item">
          {this.props.value}
        </li>
      </a>
    );
  },
});
