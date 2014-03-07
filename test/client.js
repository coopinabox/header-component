var expect = require('chai').expect;

var HeaderComponent = require('../HeaderComponent');

describe("#HeaderComponent", function () {
  var headerComponent;

  it("should be createable", function () {
    headerComponent = new HeaderComponent();
    expect(headerComponent).to.exist;
  });
});
