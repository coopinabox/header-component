/** @jsx React.DOM */
"use strict";

var React = require('react');

var Brand = require('./Brand');
var Menu = require('./Menu');

module.exports = React.createClass({

  render: function () {

    return (
      <nav className="ui large menu" role="navigation">
        <Brand brand={this.props.brand} />
        <Menu menu={this.props.menu} />
      </nav>
    );
  },
});
