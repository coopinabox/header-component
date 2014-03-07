var expect = require('chai').expect;

var React = require('react');
var HeaderComponent = require('../HeaderComponent');

describe("#HeaderComponent", function () {
  var headerComponent;

  it("should be createable", function () {
    var props = {};
    headerComponent = new HeaderComponent(props);
    expect(headerComponent).to.exist;
  });

  it("should be mountable", function () {
    React.renderComponent(headerComponent, document.body);
    expect(headerComponent.isMounted()).to.be.true;
  })
});