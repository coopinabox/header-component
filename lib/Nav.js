/** @jsx React.DOM */
"use strict";

var React = require('react');

var Menu = require('./Menu');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      nav: [{
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

    return (
      <nav role="navigation">
        <Menu menu={this.props.nav} />
      </nav>
    );
  },
});
