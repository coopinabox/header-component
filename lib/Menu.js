/** @jsx React.DOM */
"use strict";

var React = require('react');

var MenuItem = require('./MenuItem');

module.exports = React.createClass({

  render: function () {

    var menuize = function (menuItem) {
      return MenuItem(menuItem);
    }

    return (
      <ul className="ui menu">
        { this.props.menu.map(menuize) }
      </ul>
    );
  },
});
