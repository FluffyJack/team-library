var expect = require('chai').expect;
var helloWorld = require('../../lib/sanity/hello-world');

describe('Sanity', function() {
  describe('helloWorld', function() {
    it('returns a greeting', function() {
      expect(helloWorld()).to.equal('hello world');
    });
  });
});
