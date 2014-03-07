var expect = require('chai').expect;

var React = require('react');
require('node-jsx').install();
var HeaderComponent = require('../HeaderComponent');

describe("#HeaderComponent", function () {
  var headerComponent;

  it("should be createable", function () {
    var props = {};
    headerComponent = new HeaderComponent(props);
    expect(headerComponent).to.exist;
  });

  it("should be mountable", function () {
    var html = React.renderComponentToString(headerComponent);
    expect(html).to.exist;
  })
});
