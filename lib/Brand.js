/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      brand: "Beautiful People",
    };
  },

  render: function () {

    return (
      <a className="brand header item" href="/#">
        {this.props.brand}
      </a>
    );
  },
});


