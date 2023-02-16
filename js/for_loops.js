"use strict";

/** Create a function named showMultiplicationTable that accepts a number and console.logs the
* multiplication table for that number (just multiply by the numbers 1 through 10)**/


// const showMultiplicationTable = num => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }
//
// showMultiplicationTable(7);

/**CLASS EXAMPLE**/
// const showMultiplicationTable = num => {
//     let table = '';
/**     THIS IS WHERE WE MAKE OUR MONEY **/
//     for(let i =1; 1 <= 10; i++){
// //console.log(i); <--- this is to make sure your loop is only doing the # of iterations you need
//         let daMath = parseInt(number) * i;
//         //console.log(daMath); <----- this to make sure the math is correct
//         let output = `${number} x ${i} = ${daMath}\n`;
//         table += output; //is the same as (table = table + output)
//     }
//     console.log(table);
// }
// showMultiplicationTable(7);

/** Use a for loop and the code from the previous lessons to
* generate 10 random numbers between 20 and 200 and output
* to the console whether each number is odd or even. For example: **/
//PULLING randomNumber generator from utils

for(let i = 1; i <=10; i++){
    let input = randomNumber(20, 200);
    //console.log(input);  <--- checks if printing random number
    if (input % 2 !== 0) {
        console.log(`${input} is odd`);
    } else {
        console.log(`${input} is even`);
    }
}

/** Create a for loop that uses console.log to create the output shown below. **/

// for (let i = 1; i <= 9; i++){
//     let row = `${i}`.repeat(i);
//     console.log(row);
// }

/** CLASS EXAMPLE**/

// for (let i = 1; i < 9; i++){
//     let output = `${i + 1}`;
//     for(let j = 1; j > 0; j--){
//         let moNumbers = `${i + 1}`;
//         output += moNumbers;
//     }
//     console.log(output);
// }

/**
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999 **/


/** Create a for loop that uses console.log to create the output shown below.**/

// for (let i = 100; i >=5; i-=5){
//     console.log(i);
// }


/** 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10 **/