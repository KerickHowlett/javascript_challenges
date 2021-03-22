/** 
* This function will check to see if two words are a palindrome of one another.
*
* Explode the word into an array of its composing letters, reverse it, rejoin the letters
* into a string, and then test the original word with the new to see if they match.
*
* @param {string} word - The word to be tested whether it's a palindrome.
* @return {boolean} Is it a palindrome?
*/
function isPalindrome( word ) {
    word = word.toLowerCase(); // Lower casing to protect from human error.
    return word === word.split( '' ).reverse().join( '' ); 
}

// Test functions.
const words = [ 'car', 'horn', 'noon', 'a', 'Anna', 'Florida' ];
function test() {
    words.forEach( word => console.log( `Is "${ word }" a palindrome? | ${ isPalindrome( word ) }` ) );
}

test();