var expect = require('chai').expect;

var React = require('react');
require('node-jsx').install();
var Header = require('../');

describe("#Header", function () {
  var header;

  it("should be createable", function () {
    var props = {};
    header = new Header(props);
    expect(header).to.exist;
  });

  it("should be mountable", function () {
    var html = React.renderComponentToString(header);
    expect(html).to.exist;
  })
});
