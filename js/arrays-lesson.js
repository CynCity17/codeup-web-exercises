let fruits = ["bananas", "apples", "oranges", "mangoes", "tomatoes"];

// let var1 = fruits[2];
// console.log(var1);
//
// let numberOfFruits = fruits.length;
// console.log(`The number of fruits => ${numberOfFruits}`);
//
// let fruitString = fruits.toString();
// console.log('Using toString() on fruits =>', fruitString);
//
// let fruitsAndNumbers = ["bananas", 2, "apples", 8675309, undefined, null, NaN];
// console.log(fruitsAndNumbers);

// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i];
//     console.log(fruit);
// }


/**Easily Loop through Arrays**/

//Old School Function Style
// fruits.forEach(function (element, index, array){
//     console.log("The element follows:", element);
//     console.log("The index follows:", index);
//     console.log("The array folllow:", array);
// });

//ARROW STYLE FUNCTION
// fruits.forEach((fruit, index, array) =>{
//     console.log("The element follows:", fruit);
//     console.log("The index follows:", index);
//     console.log("The array folllow:", array);
// });

//Pushing array out by looping through an array
// let favFruits = [];
// fruits.forEach((fruit, index, array) =>{
//     if (fruit === "apples" || fruit === "tomatoes"){
//         favFruits.push(fruit);
//     }
// });
// console.log(favFruits);


