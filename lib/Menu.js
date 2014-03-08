/** @jsx React.DOM */
"use strict";

var React = require('react');

var MenuItem = require('./MenuItem');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      menu: [{
        href: "/who",
        value: "Who",
      }, {
        href: "/what",
        value: "What",
      }, {
        href: "/why",
        value: "Why",
      }],

    };
  },

  render: function () {

    var menuize = function (menuItem) {
      return MenuItem(menuItem);
    }

    return (
      <ul className="left menu">
        { this.props.menu.map(menuize) }
      </ul>
    );
  },
});
