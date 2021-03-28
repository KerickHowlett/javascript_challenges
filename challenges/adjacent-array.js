function adjacentElementsProduct( inputArray ) {
    return Math.max( ...inputArray.slice( 0, -1 ).map( int => Number( int ) ).filter( int => !isNaN( int ) ).map( ( int, index ) => int * inputArray[ index + 1 ] ) );
}

function test() {
    const testArray = [  3, 6, -2, -5, 7, 3 ];
    console.log( adjacentElementsProduct( testArray ) );
}

test();