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