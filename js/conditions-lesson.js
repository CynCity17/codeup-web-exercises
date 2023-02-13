"use strict";

// let flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

// if (flavor === "chocolate"){
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert("One vanilla coming right up!");
// } else {
//     alert("We don't have tht flavor, sorry :(")
// }

//switch statements are only good for functions that are matching values
// switch (flavor.toLowerCase()) {
//     case("chocolate"):
//         alert("Once chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         aler("One strawberry coming right up!");
//         break;
//     default:
//         alert("We don't have that flavor, sorry :(");
// }

// function serveIceCream(flavor) {
//     if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
//         alert(`One ${flavor} coming right up!`);
//     } else {
//         alert("We don't have that flavor :(");
//     }
// }
//
// serveIceCream(prompt("Welcome to Codeup Ice Cream! What flavor do you want?").toLowerCase());

// function divisibleByFive(number) {
//     if (number % 5 === 0) {
//         console.log("Divisible by 5!");
//     } else {
//         console.log("not divisible by 5!");
//     }
// }

const divisibleByFiveTernanry = number => {
    number % 5 === 0 ? console.log("Divisible by 5!") :
        console.log("Not divisble by 5!");
}

// const divisible = (dividend, divisor) => {
//     dividend % divisor === 0 ? console.log(`Divisible by ${divisor}!`) :
//         console.log(`Not divisible by ${divisor}!`);
// }
// const divisible = (dividend, divisor) => {
//     return dividend % divisor === 0 ? `Divisible by ${divisor}!` :
//         console.log(`Not divisible by ${divisor}!`);
// }

function divisible(divident, divisor) {
    if (dividend % divisor === 0) {
        return true;
    } else {
        return false;
    }
}
// BETTER SYNTAX FOR ABOVE BOOLEAN EXPRESSION
//function divisible (divident, divisor) {
//    return dividend % divisor === 0;
//}