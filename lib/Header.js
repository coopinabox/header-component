/** @jsx React.DOM */
"use strict";

var React = require('react');

var Brand = require('./Brand');
var Nav = require('./Nav');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {};
  },

  render: function () {

    return (
      <header>
        <Brand brand={this.props.brand} />
        <Nav menu={this.props.nav} />
      </header>
    );
  },
});
