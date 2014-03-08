var expect = require('chai').expect;

var React = require('react');
var Header = require('../');

describe("#Header", function () {
  var header;

  it("should be createable", function () {
    var props = {};
    header = new Header(props);
    expect(header).to.exist;
  });

  it("should be mountable", function () {
    React.renderComponent(header, document.body);
    expect(header.isMounted()).to.be.true;
  })
});
