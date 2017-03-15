(function() {
    'use strict';

    window.calc = window.calc || {};

    /**
     * Adds whatever numbers are provided and returns the total
     * @param  {Array} numbers  The numbers to add together
     * @return {Number}         The total of all numbers
     */
    window.calc.sum = function sum(numbers) {
        let total = 0;


        if (!numbers) {
            //numbers === typeof(numbers)  //will check if string, if true the auto continue
            // var partsOfStr = str.split(''');  // will slit based on ''
            //  split()   //will split
            return total;
        }

        if (Array.isArray(numbers)===false) {
            return NaN;
        }

        numbers.forEach(function addThem(num) {
            total += Number(num);

        });
        return total;
    };

    //    //I want to declair a string as a number and add if it is a number
    // window.calc.sum = function sum( x = 0, y = 0) {
    //       x = Number(x);
    //       x >= 0 || x <0; x === NaN
    //       y = Number(y);
    //       return x + y;
    // };



    /**
     * Returns the factorial for the given number which is defined as:
     *    1 * 2 * 3 * ... * topNumber
     *    For example, if the number is 5, the factorial would be:
     *    1 * 2 * 3 * 4 * 5 = 120
     * @param  {Number} topNumber  The number to get the factorial value for
     * @return {Number}            The final factorial value
     */
    function factorial(topNumber) {
        const total = 0;

        if (typeof(topNumber) !== 'number') {
            return 0;
        }

        for (let i = 1; i <= topNumber; i++) {
            total *= i;
        }

        return total;
    }

})();
