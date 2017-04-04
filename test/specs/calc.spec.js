(function() {
    'use strict';
    let expect = chai.expect;



    describe(
      it('should add numbers', function() {
        let result = window.calc.sum([ 1, 2, 3]);
        console.info(result);
        expect( result ).to.be.a( 'number' ).and.to.equal(6);
      });
    );

    describe(
      it('should add if only one argument', function(){
        let result = window.calc.sum([55]);
        expect( result ).to.be.a( 'number' );
        expect( result ).to.equal(55);
        // expect( result ).to.be.a( 'number' ).and.to.equal(55);
      });
    );

    describe(
      it('should handle no arguments', function(){
        let result = window.calc.sum();
        expect( result ).to.equal(0);
      });
    );

    describe(
      it('should be NaN if not a array', function(){
        let result = window.calc.sum('sdfgjhkgfds');
        expect( result ).to.be.NaN;
      });
    );

    describe(
      it('input should result in NaN if string is not a number', function(){
        let result = window.calc.sum([2,'foobar',3]);
        expect(result).to.be.NaN;
      });
    );

    describe(
      it('input should result in NaN if string is not a number', function(){
        let result = window.calc.sum(['foobar']);
        expect(result).to.be.NaN;
      });
    );

  ////
  ////
  ////
  ////factorial portion
  ////

    describe(
      it('number should output factorial', function(){
        let result = window.calc.factorial(5);
        expect(result).to.equal(120);
      });
    );

    describe(
      it('topNumber should be a number', function(){
        let result = window.calc.factorial('foobar');
        expect(result).to.equal(0);
      });
    );

    describe(
      it('if multiple topNumber are inputed only the first number will count as the topNumber', function(){
        let result = window.calc.factorial(5, 4, 2);
        expect(result).to.equal(120);
      });
    );

    describe(
      it('if an array is added it will return 0', function(){
        let result = window.calc.factorial([ 5, 4, 2]);
        expect(result).to.equal(0);
      });
    );

      // it('taylor series like division of factorial will return 0', function(){
      //   let result = window.calc.factorial( (factorial(5))/(factorial(4)) );
      //   expect(result).to.equal(undefined);
      // });

    describe(
      it('Nonintegers will return 0', function(){
        let result = window.calc.factorial(1.5);
        expect(result).to.equal(1);
      });
    );

    describe(
      it('topNumber as 0 will return 1', function(){
        let result = window.calc.factorial(0);
        expect(result).to.equal(1);
      });
    );

    describe(
      it('Nonintegers will return 0', function(){
        let result = window.calc.factorial( -3 );
        expect(result).to.equal(1);
      });
    );

})();
