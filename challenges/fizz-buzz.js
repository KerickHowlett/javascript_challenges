/** 
* Print out a certain word based on a certain criteria:
*
* Print out on a range from 0 to the entered argument,
* print out the following based on the criteria:
*  - Divisible of 3: "fizz"
*  - Divisible of 5: "buzz"
*  - Divisible of both 3 && 5: "fizzbuzz"
*  - Divisible of neither 3 || 5: number
*
*
* @param {number} number - The numberer to be tested.
* @return {string} "fizz" || "buzz" || "fizzbuzz"
*
*/

function fizzBuzz( number ) {

    for ( let index = 1; index <= number; index++ ) {
        let printOut = '';
        if ( index % 3 === 0 ) printOut += 'fizz';
        if ( index % 5 === 0 ) printOut += 'buzz';
        if ( printOut === '' ) printOut = index;
        console.log( printOut );
    }
    
}

// Test function.
fizzBuzz( 20 );