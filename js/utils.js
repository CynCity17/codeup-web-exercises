

function formatToLocaleString(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}


function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

/** Function for Factorials**/
const getFactorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
getFactorial();


/**Building a Pyramid printed by lines**/
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

buildPyramid();

//Generates random numbers
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayOfRandomNumbers(lenghtOfArray){
    const array = [];
    for(let i = 0; i < lenghtOfArray; i++){
        let newRandomNumber = randomNumber(1, lenghtOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lenghtOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array;
}


