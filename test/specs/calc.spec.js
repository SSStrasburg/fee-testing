(function() {
    'use strict';
    let expect = chai.expect;

    it('one equals one test', function() {

      expect(1).to.equal(1);
    });

    it('should add numbers', function() {
      let result = window.calc.sum([ 1, 2, 3]);
      console.info(result);
      expect( result ).to.be.a( 'number' ).and.to.equal(6);
    });

    it('should add if only one argument', function(){
      let result = window.calc.sum([55]);
      expect( result ).to.be.a( 'number' );
      expect( result ).to.equal(55);
      // expect( result ).to.be.a( 'number' ).and.to.equal(55);
    });


    it('should handle no arguments', function(){
      let result = window.calc.sum();
      expect( result ).to.equal(0);
    });

    it('should be NaN if not a array', function(){
      let result = window.calc.sum('sdfgjhkgfds');
      expect( result ).to.be.NaN;
    });

    it('input should result in NaN if string is not a number', function(){
      let result = window.calc.sum([2,'foobar',3]);
      expect(result).to.be.NaN;
    });

    it('input should result in NaN if string is not a number', function(){
      let result = window.calc.sum(['foobar']);
      expect(result).to.be.NaN;
    });

// handle no arguments
// handle empty array
// convert strings to numbers for addition
// define string
//  input should contain a number... expect('foobar').to.contain('foo');


})();
