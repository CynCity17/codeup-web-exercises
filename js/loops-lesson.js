"use strict";

// WHILE LOOP
// let i = 1;
// while (i <= 10) {
//     console.log(`Loop #${i}`);
//     i++;
// }
/**
 *
DO WHILE**/
// do {
//     console.log(`Loop #${i}`);
//     i++;
// } while (i <= 10)
/**
*
FOR LOOP**/
//for (let i = 1; i <= 10; i++) {
//     console.log(`Loop #${i}`);
//}

for (let i = 1; i <= 10; i++) {
     console.log(i);
}


const getFactorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
    return result;
}
getFactorial(5);



const buildPyramid = (rows) => {
    //Loop through rows
    for(let i = 1; i <= rows; i++){
        let row = "";
        //Loop to add spaces
        for(let j = 1; j <= rows - i; j++){
            row += "  ";
        }
        //Loop to add the asterisks
        for(let k = 1; k <= 2 * i -1; k++){
            row += "* ";
        }
        console.log(row);
    }
}

buildPyramid(5);