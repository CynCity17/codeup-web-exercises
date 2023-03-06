/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string)
 * and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

const convertAddressToObject = (address) => {
return{
    streetNumber: address.substring(0,
        address.indexOf())
}
}
/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
const people = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
];
// FIRST CLASS EXAMPLE
// const totalPets = (personsArray) =>{
//     let total =0;
//     for(let i = 0; i < personsArray.length; i++){
//         total += personsArray[i].pets;
//     }
//     return total;
// }

//FASTER CLASS EXAMPLE
const totalPets = (personsArray) =>{
    let total = 0;
    personsArray.forEach(person =>{
        total += person.pets;
    });
    return total;
}
/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the
 * minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
function minMax(numsArray){
    const minAndMax = [];
    minAndMax[0] = Math.min(...numsArray);
    minAndMax[1] = Math.max(...numsArray);
    return minAndMax;
}
/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an
 * object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks
 * array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function sortDrinkByPrice(drinks){
    return drinks.sort((a,b) => a.price - b.price);
}



const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

/** Make sure you are comfortable with these techniques: looping over the array,
// console-logging the name of each city. Then try console-logging the name and state.
//     Then try console-logging all the cities in Texas with populations over 1 million.
//     Write a function that accepts one city object and returns true if the city is in Texas.
//     Write a function that accepts an array of city objects and the name of a state and returns
// an array with only the cities in that state.**/

for (let i = 0; i < cities.length; i++){
    console.log(cities[i].name);
}

for (let i = 0; i < cities.length; i++){
    console.log(`${cities[i].name}, ${cities[i].state}`);
}

for (let i = 0; i <cities.length; i++) {
    if (cities[i].state === "Texas" && cities[i].population > 1000000) {
        console.log(`${cities[i].name}, ${cities[i].state}`);
    }
}

function isInTexas(cityObject){
    if (cityObject.state === "Texas"){
        return true;
    } else {
        return false;
    }
}
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
const peopleAndBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]
function getBudgets(arrayOfObjects){
    let totalBudget = 0;
    arrayOfObjects.forEach(object => totalBudget += object.budget);
    return totalBudget;
}