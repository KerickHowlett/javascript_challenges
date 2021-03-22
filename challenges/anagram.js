/** 
* Test to see if two words are an anagram of each other.
*
* @param {string} wordOne
* @param {string} wordTwo
* @return {boolean} Is is an anagram?
*/
function isAnagram( wordOne, wordTwo ) {

    // Break down each word, shift to lower case, and make sure there are no spaces or the like.
    const charactersOne = wordBreakDown( wordOne );
    const charactersTwo = wordBreakDown( wordTwo );

    // If the lengths don't match, then it can't be an anagram.
    if ( Object.keys( charactersOne ).length !== Object.keys( charactersTwo ).length ) return false;

    // Will loop through each letter, and see if the values match -- reducing the number of loops required.
    for ( let character in charactersOne ) {
        if ( charactersOne[ character ] !== charactersTwo[ character] ) return false;
    }

    return true; // If it passes all tests, then it's an anagram.

}

// Breaks down each character and tallies each occurrence. 
const wordBreakDown = word => {
    const characters = {};
    // If has value, add index by one.
    for( let character of word.toString().replace( /[^\w]/g ).toLowerCase()  ) characters[ character ] = characters[ character ] + 1 || 1;
    return characters;
};

// Test function.
function test() {
    console.log( isAnagram( 'Neo', 'One' ) );
    console.log( isAnagram( 'rat', 'tar' ) );
    console.log( isAnagram( 'Wayne', 'Head' ) );
    console.log( isAnagram( 'Hey', 'Arnold!' ) );
}

test();