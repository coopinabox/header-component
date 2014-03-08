var chai = require('chai');
var expect = chai.expect;
var $ = jQuery = require('jquery');
chai.use(require('chai-jquery'));

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
  });

  it("defaults should be correct", function () {
    // assert header structure
    expect($('body > header')).to.exist;
    expect($('body > header > .brand')).to.exist;
    expect($('body > header > nav')).to.exist;
    expect($('body > header > nav > .menu')).to.exist;
    expect($('body > header > nav > .menu .item')).to.exist;

    // assert values
    expect($('.brand')).to.have.text('Beautiful People');
    expect($('.menu a:nth-child(1) .item')).to.have.text('Who');
    expect($('.menu a:nth-child(1)')).to.have.attr('href', '/who');
    expect($('.menu a:nth-child(2) .item')).to.have.text('What');
    expect($('.menu a:nth-child(2)')).to.have.attr('href', '/what');
    expect($('.menu a:nth-child(3) .item')).to.have.text('Why');
    expect($('.menu a:nth-child(3)')).to.have.attr('href', '/why');
  })
});
