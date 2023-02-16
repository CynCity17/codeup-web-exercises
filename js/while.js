"use strict";

/** Create a while loop that uses console.log() to create the output shown below. **/

/** Iterates 16 times
//Accumulator continuously multiplies by 2 **/

let i = 1
let multipliedBy = 2;
let accumulator = 1;
while(i <= 16){
    let result = accumulator * multipliedBy;
    accumulator += result;


    i++;
}



// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
let conesInventory = randomNumber(50, 100);

do {
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > conesInventory) {
        console.log(`Cannot sell you ${conesWanted}, I only have ${conesInventory}.`);
        console.log(`${conesInventory} sold...`);
        conesInventory = 0;
    } else {
        console.log(`${conesWanted} sold...`);
        conesInventory = conesInventory - conesWanted;
    }
    console.log(`${conesInventory} left.`);
} while(conesInventory > 0);
console.log("Yay I've sold them all!");