/** 
* This function will extract all vowels in a given word.
*
* @param {string} word - The word to test for vowels.
* @return {number} The number of vowels.
*/
function countVowels( word ) {
    const vowels = word.match(/[aeiou]/gi); // Use RegEx to pull out only the vowels; "gi" makes it case insensitive.
    return vowels ? vowels.length : 0; // match() returns a string or NULL and not an actual number.
}

// Test functions.
function test( word ) {
    console.log( `"${ word }" has ${ countVowels( word ) }` );
}

test( 'Moon' );
test( 'Kerick' );
test( 'autism' );
test( 'The Doctor' );