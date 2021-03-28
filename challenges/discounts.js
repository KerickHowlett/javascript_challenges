/*

Discounts

Description
The marketing team for a local grocery store wants to boost sales. To do so, they want to start using automatic discounts during checkout. The automatic discounts that they would like to have are:

Buy one bag of grapes and get another bag of grapes for free ("Two for the price of one")
Buy at least two apples and get a 20% discount on apples

The products that are currently available in their store are:

Bag of grapes priced at $5 per bag
Apples priced at $3 per apple
Peaches priced at $7 per peach

Your task: Build a program to calculate the total price at checkout for a customer, taking discounts into consideration.

Behaviour
The input to your solution should match the following schema: [ [ <product>, <quantity> ],...]
The output of your solution should be a number representing the total price at checkout after discounts.
Your solution should work for any combination of products listed above, in any quantities equal to or above 0. You do not need to handle unlisted products or quantities below 0.

Input/Output Expectations
Here are some example inputs and outputs. Note that the input does not have to look exactly like this. It can vary based on whatever is customary for the chosen language. For example, ruby commonly uses nested arrays but strongly typed languages like C#, Java, and C++ would commonly use lists of tuples. It is the spirit of the input that matters. Shape your input in whatever way makes sense for your language of choice. This isn't meant to be an input parsing challenge.
 [ ['grapes', 1], ['apples', 0], ['peaches', 1] ] # output => 12
 [ ['grapes', 1], ['apples', 1], ['peaches', 1] ] # output => 15
 [ ['grapes', 2], ['apples', 2], ['peaches', 1] ] # output => 16.8
 [ ['grapes', 3], ['apples', 5], ['peaches', 2] ] # output => 36
 [ ['peaches', 7], ['grapes', 7], ['apples', 7] ] # output => 85.8
 
 
 */

/*
    Calculate the total price at checkout for a customer.
    
    @param1: cart { array[ array[ string, number ] ] } - A nested array containing data of fruit in this exact order: name of fruit (string) & quantity (number/int).
    @return: (number/int) Total price with discounts taken into consideration.
 */
    function calculateCheckout( cart ) {
        return cart.filter( fruit => fruit[ 1 ] > 0 ) // Filter our all items with a quantity of zero. 
                   .map( ( fruit, index ) => fruit[ 1 ] = calculateDiscounts( fruit, index ) ) // Remap nested array into a flat array of post-calculated/discounted prices. 
                   .map( price => Math.round( price * 100 ) / 100 ) // Rounded values to the proper cent amount (truncated to just two decimals to match American currency).
                   .reduce( ( total, fruitPrice ) => total + fruitPrice ); // Use reduce to sum up for grand total.
    }
    
    /*
        Calculate potential discounted price assuming they meet the required criteria. 
    
           - 20% of apples if 2 or more. 
           - Only pay for 1 apple for every 2 purchased AKA "Buy One, Get One Free". 
           - Peaches don't get a discount under any criteria. 
        
        @param: fruit { array[ string, number ] } - An array containing data of fruit in this exact order: name of fruit (string) & quantity (number/int). 
        @return: {number/int} - The subtotal for the item/fruit after discount calculations.
    
     */
    const calculateDiscounts = ( fruit ) => {
    
        const quantity = fruit[ 1 ];
        switch ( fruit[ 0 ] ) {
            case 'apples':
                return ( quantity * ( 3 * ( quantity < 2 ? 1 : 0.80 ) ) ); // If there are 2+ apples, then the 20% discount is applied. ( 100% - 20% = 80% = 0.80 as a decimal. )
            case 'grapes':
                return ( Math.ceil( quantity / 2 ) * 5 ); // Divides the quantity in half (2) and then rounds it up to the next whole number since the store will not allow the customer to buy a fraction of a bag of grapes.
            default:
                return ( quantity * 7 ); // No discount is applied for peaches.
        }
    
    };
    
    /*
        This function will run the algorithm based on the dummy data entered and will then log them in the console via forEach loop.
        
        @param: @param: tests { array[ array[ string, number ] ] } - A nested array containing data of fruit in this exact order: name of fruit (string) & quantity (number/int).
        @return: {void} - The function returns nothing, but it will log the grand totals in the console.
     */
    function main( tests ) {
        for ( let test of tests ) console.log( `Your grand total is $${ calculateCheckout( test ) }` );
    }
    
    const data = [ // Dummy Data for test.
        [ [ 'grapes', 1 ], [ 'apples', 0 ], [ 'peaches', 1 ] ], // 12
        [ [ 'grapes', 1 ], [ 'apples', 1 ], [ 'peaches', 1 ] ], // 15 
        [ [ 'grapes', 2 ], [ 'apples', 2 ], [ 'peaches', 1 ] ], // 16.8 
        [ [ 'grapes', 3 ], [ 'apples', 5 ], [ 'peaches', 2 ] ], // 36 
        [ [ 'peaches', 7 ], [ 'grapes', 7 ], [ 'apples', 7 ] ] // 85.8
    ];
    
    main( data ); // Execution of primary algorithm function.