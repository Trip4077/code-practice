/*

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {
    let sum = 1;
    let currentDigit = 1;
    let previousDigit = 1;

    // const sequence = [ 1, 1 ]
  
    if( num < 1 ) return 0;
    if( num === 1 ) return sum;
  
    while(currentDigit <= num) {
      if(currentDigit === previousDigit) {
        currentDigit += previousDigit;
        sum += 1;
        continue;
      }
      
     // sequence.push( currentDigit )

      if( currentDigit % 2 !== 0 ) {
        sum += currentDigit
      }
  
      const temp = currentDigit;
      currentDigit += previousDigit
      previousDigit = temp;
    }

    // console.log(sequence)
    return sum;
  }
  
//   console.log( sumFibs(75025) );
//   console.log( sumFibs(75024) );