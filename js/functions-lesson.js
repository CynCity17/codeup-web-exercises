"use strict";

//traditional method
// function helloWorld(){
//     alert('Hello World!');
// }

//the arrow function
// const helloWorld = (name) => {
//     let message = `Hello ${name}!`
//     return message;
// }
//
// let firstHello = helloWorld("Jason");
// console.log(firstHello);
// let secondHello = helloWorld("Javier");
// alert(secondHello);

// const parseDiscordName = (name) => {
//     let guildCharEnd = name.indexOf(']') + 1;
//     let guildName = name.substring(0,guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let message = `The user's name is ${userName}.
//     And they are a member of the ${guildName} guild.`;
//     let nameArray = [guildName, userName];
//     return nameArray
//     // return message;
// }

// let discordName = parseDiscordName("[YoLoBlob]Jason");
// console.log(discordName);
//
// let discordName2 = parseDiscordName("[GAMER]Billy");
// console.log(discordName2);

const highFive = (name1, name2) => {
    let message = `${name1} gives ${name2} a high five!`;
    return message;
}
//BETTER SYNTAX for SIMPLE functions:
//const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;

let names1 = highFive("Jason", "Javier");
console.log(highFive(names1));

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}

let students = 24;
let evenStudents = isEven(students);

//IIFE (Immediately-invoked Function Expression) arrow function
(() => {

})();




//
// 2. Write a function that accepts a last name and a first name and returns the full name.
const fullName = (firstName, lastName) => {
    let combinedName = `${firstName}` + ` ${lastName}`;
    return combinedName;
}
const firstName = "Cynthia";
const lastName = "Nelson";
console.log(fullName(firstName, lastName));
// 3. Write a function that accepts a number and returns it negative. [if the number is already
// negative it should return that number unchanged, and zero should be unchanged]
const goNegative = (num) => {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}
let firstNumber = -3;
let secondNumber = 0;
let thirdNumber = 3;
console.log(goNegative(firstNumber));
console.log(goNegative(secondNumber));
console.log(goNegative(thirdNumber));
// 1. Make a function called returnTwo() that returns the number 2 when called
// Test this function with `console.log(returnTwo())`
const returnTwo = () => {
    return 2;
}
console.log(returnTwo());
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
//    Test this function by directly calling `sayHowdy()`
const sayHowdy = () => {
    return "Howdy!";
}
console.log(sayHowdy());
// Remember this function does not need a defined return value
// 1. Make a function called returnName() that returns the string of your name
// Test this function with `console.log(returnName())`
const returnName = () => {
    return "Cynthia";
}
console.log(returnName());
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with `console.log(addThree(5))`
const addThree = (num) => {
    return (num + 3);
}
console.log(addThree(5));
//     1. Make a function called sayString() which returns the string input passed in.
// Test this function with `console.log(sayString('codeup'))`
const sayString = (string) => {
    return string;
}
console.log(sayString('codeup'));
// - Write a function named `lowerCase(string)`
const lowerCase = (string) => {
    return string.toLowerCase();
}
console.log(lowerCase('CODEUP'));

// - Write a function named `double(n)` that returns a number times two
const double = (num) => {
    return (num * 2);
}
console.log(double(4));
// - Write a function named `triple(n)` that returns a number times 3
const triple = (num) => {
    return (num * 3);
}
console.log(triple(5));
// - Write a function named `quadruple(n)` that returns a number times 4
const quadruple = (num) => {
    return (num * 4);
}
console.log(quadruple(8));
// - Write a function named `half(n)` that returns 1/2 of the provided input
const half = (num) => {
    return (num / 2);
}
console.log(half(10));

// - Write a function named `subtract(a, b)` that returns `a` minus `b`
const subtract = (a, b) => {
    return (a - b);
}
console.log(subtract(8, 3));

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
const multiply = (a, b) => {
    return (a * b);
}
console.log(6, 2);
// - Write a function named divide(a, b) that returns `a` divided by ~b~
const divide = (a, b) => {
    return (a / b);
}
console.log(divide(4, 8));
//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b
// - Write a function named `cube(n)` that returns n * n * n
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
// - Write a function named `cubeRoot(n)` that returns the cube root of the input