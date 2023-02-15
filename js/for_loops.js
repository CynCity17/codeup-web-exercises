"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the
// multiplication table for that number (just multiply by the numbers 1 through 10)
const showMultiplicationTable = num => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even. For example:
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i = 1; i <=10; i++){
    let input = randomNumber(20, 200);
    if (input % 2 !== 0) {
        console.log(`${input} is odd`);
    } else {
        console.log(`${input} is even`);
    }
}

// Create a for loop that uses console.log to create the output shown below.
for (let i = 1; i <= 9; i++){
    let row = `${i}`.repeat(i);
    console.log(row);
}
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


// Create a for loop that uses console.log to create the output shown below.
for (let i = 100; i >=5; i-=5){
    console.log(i);
}
//
// 100
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
// 10
5