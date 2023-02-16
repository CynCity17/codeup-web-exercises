"use strict";

/** Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting
//     the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number
//     the user entered. **/

// let userPrompt;
// let userOddNumber;
// while(true) { //THIS is DANGEROUS because of infinite loops
//     userPrompt = prompt("Please enter an odd number between 1 and 50:");
//     userOddNumber = parseInt(userPrompt);
//     if (userOddNumber >= 1 && userOddNumber <= 50 && userOddNumber % 2 === 1) {
//         break;
//     }
// }
//
// for (let i = 1; i <= 49; i += 2){
//     if (i === userOddNumber) {
//         console.log(`Yikes! Skipping number: ${userOddNumber}`);
//         continue;
//     }
//     console.log(`Here is an odd number: ${i}`);
// }