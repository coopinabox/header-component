/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      brand: "Beautiful People",
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

    var menuize = function (menu) {
      // TODO
      return (
        <ul className="left menu">
          <li><a href="/#actions">/#actions</a></li>
          <li><a href="/actions">/actions</a></li>
        </ul>
      );
    }

    return (
      <nav role="navigation">
        <div className="ui header">
          <a className="brand" href="/">
            {this.props.brand}
          </a>
        </div>
        menuize(this.props.menu)
      </nav>
    );
  },
});
