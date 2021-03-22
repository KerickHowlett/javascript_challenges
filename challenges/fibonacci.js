/** 
* This function will return the previous number in the fibonacci sequence.
*
* Example of Fibonacci Sequence: [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ].
*
* @param {number} number - The numberer to pull from the fibonacci sequence.
* @return {number} What is that particular number within the sequence?
*/

function fibonacci( number ) {
    return number < 2 ? number : fibonacci( number - 1 ) + fibonacci( number - 2 );
}

// Test function.
const numbers =[ 8, 0, 5, 2, 3, 1, 6, 7, 4 ];
function test() {
    const sequence = [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ];
    numbers.forEach( ( number ) => console.log( `Acquired correct value for argument ${ number } is ${ fibonacci( number ) === sequence[ number ] ? 'CORRECT' : 'INCORRECT' }!` ) );
}

test();