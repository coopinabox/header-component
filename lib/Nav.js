/** @jsx React.DOM */
"use strict";

var React = require('react');

var Menu = require('./Menu');

module.exports = React.createClass({

  render: function () {

    return (
      <nav role="navigation">
        <Menu menu={this.props.menu} />
      </nav>
    );
  },
});
