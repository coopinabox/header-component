/** @jsx React.DOM */
"use strict";

var React = require('react');

var MenuItem = require('./MenuItem');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      menu: [{
        href: "/who",
        text: "Who",
        icon: "fa fa-group",
        color: "blue",
      }, {
        href: "/what",
        text: "What",
        icon: "fa fa-gears",
        color: "green",
      }, {
        href: "/why",
        text: "Why",
        icon: "fa fa-heart",
        color: "red",
      }],

    };
  },

  render: function () {

    var menuize = function (menuItem) {
      return MenuItem(menuItem);
    }

    return (
      <ul>
        { this.props.menu.map(menuize) }
      </ul>
    );
  },
});
