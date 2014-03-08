/** @jsx React.DOM */
"use strict";

var React = require('react');

var Nav = require('./Nav');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {};
  },

  render: function () {

    return (
      <header>
        <Nav
          brand={this.props.brand}
          menu={this.props.menu}
        />
      </header>
    );
  },
});
