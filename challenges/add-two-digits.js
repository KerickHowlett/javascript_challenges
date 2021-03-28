function addTwoDigits( n ) {
    if ( isNaN( n ) || ( n < 10 || n > 99 ) ) {
        console.error( 'You can only enter a two digit number in this function.' );
        return -1;
    }
    return n.toString().split( '' ).map( digit => Number( digit ) ).reduce( ( summed, addition ) => summed + addition );
}

function test() {
    console.log( addTwoDigits( 1 ) );
}

test();
