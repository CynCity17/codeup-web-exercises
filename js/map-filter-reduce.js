const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(price => console.log(price));

const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2)
    return total;
})

 // TODO: Starting with an array of numbers, use .map to create an array with all the numbers squared.
let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];

const arraySquared = randomNumbers.map(number => number**2);


const cars = [
    {
        make: "Honda",
        year: 2000,
        model: "Civic",
        mileage: 10428,
        price: 3903
    },
    {
        make: "Toyota",
        year: 2020,
        model: "Corolla",
        mileage: 9425,
        price: 12903
    },
    {
        make: "Ford",
        year: 2005,
        model: "Mustang",
        mileage: 2567,
        price: 5903
    },
    {
        make: "Audi",
        year: 1999,
        model: "A3",
        mileage: 14500,
        price: 9903
    },
    {
        make: "Mazda",
        year: 1990,
        model: "3",
        mileage: 11248,
        price: 15903
    }
];

const mileages = cars.map(car => car.mileage);
const carNames = cars.map(car => `${car.make} ${car.model}`);

const underTenThousandMiles = cars.filter(car => car.mileage < 10000);

const underTenThousandMilesSorted = cars.filter(car => car.mileage < 10000).sort((a, b) => a.mileage - b.mileage);

cars.filter(car => car.price < 10000)
    .map(car => {
        const tax = car.price * 0.0825;
        const total = (car.price + tax).toFixed(2);
        return {
            ...car,
            priceWithTax: parseFloat(total)
        }
    })
    .sort((a, b) => b.price - a.price)
    .forEach(({year, make, model, price, priceWithTax}) => {
        const p = document.createElement('p');
        p.innerText = `I found a ${year} ${make} ${model} for $${price}, or $${priceWithTax} after tax.`;
        document.querySelector('body').append(p);
    });

const carsPrices = cars.map(car => car.price);

let totalValueOfAllCars = carsPrices.reduce((total, price) => total + price);

// TODO: Take your books array from the objects exercise. Use .map() to create a new array that has all the author names in a single property.


const books = [
    {
        title: "The Body Keeps the Score",
        author:  {
            firstName: "Bessel",
            lastName: "van der Kolk"
        }
    },
    {
        title: "Becoming Supernatural",
        author: {
            firstName: "Joe",
            lastName: "Dispenza"
        }
    },
    {
        title: "Lightlark",
        author: {
            firstName: "Alex",
            lastName: "Aster"
        }
    },
    {
        title: "The Golden Enclaves",
        author: {
            firstName: "Naomi",
            lastName: "Novik"
        }
    },
    {
        title: "The Last Graduate",
        author: {
            firstName: "Naomi",
            lastName: "Novik"
        }
    }
];

//ARRAY OF OBJECTS
const authors = books.map(book => book.author);

//ARRAY OF AUTHORS
const author = books.map(book => `${book.author.firstName} ${book.author.lastName}`);


// TODO: Use .map to create an array of strings where each element is a user's email address

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const emails = users.map(user => user.email);

/** THIS is the same as above:
const emails = users.map(user =>{
 return user.email
 }); **/

/** Class example for forEach **/
emails.forEach(email => console.log(email));

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const usersWithAtLeastThree = users.filter(user => user.languages.length >= 3);

/** the above is the same as:
 * const usersWithAtLeastThree = users.filter(user =>{
 *     return user.languages.length >= 3;
 * }); **/

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((acc, curr, index)=>{
    return acc + curr.yearsOfExperience;
    }, 0);

let averageYears = totalYears / users.length;
console.log(averageYears);

const avgYears = users.reduce((acc, {yearsOfExperience: years})=>{
    return acc + years;
},0);


// TODO: Use .reduce to get the longest email from the list of users.

//This ends up returning the user object with the longest email, not just the email//
const longestEmail = users.reduce((acc, user, index, array)=> acc.email.length > user.email.length ? acc : user);

//THIS DOES ONLY THE LONGEST EMAIL//
const longestEmail2 = users.reduce((acc, user)=>{
    if(acc.length < user.email.length){
        return user.email;
    }else{
        return acc;
    }
}, '')


// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//CREATES AN ARRAY OF THE INSTRUCTOR NAME//
const listOfInstructors = users.reduce((acc, user)=>{
    acc.push(user.name);
    return acc;
}, []);


let instructors = users.reduce((acc, user, index)=>{
    if(index + 1 === users.length){
        return acc + `${user.name},`;
    }else{
        return acc + `${user.name}, `;
    }
}, 'Your instructors are: ');
console.log(instructors);

//TODO: Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((acc, user)=>{
    user.languages.forEach(function (language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    });
    return acc;
}, []);

console.log(uniqueLanguages);


const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

// TODO: Create an array with all the smash characters whose names contain only 5 letters.
// 1:55
// TODO: Create another array with all the smash characters whose names contain over 10 letters.
// TODO: Order these arrays alphabetically.

const smashersFive = smashers.filter(smasher => smasher.length === 5);

const smashersGreaterTen = smashers.filter(smasher => smasher.length > 10);

const smashersFiveSorted = smashers.filter(smasher => smasher.length === 5).sort();

const smashersTenSorted = smashers.filter(smasher => smasher.length > 10).sort();

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];



//TODO: Find the total and average of the array of a hundred numbers.


const total = aHundredNums.reduce((accumulator, currentValue, index)=>{
    // console.log(`At ${index} the accumulator is ${accumulator} and the current value is ${currentValue}`);
    return accumulator + currentValue;
});


const average = aHundredNums.reduce((acc, curr, index , array)=>{
    acc =acc + curr;
    if (index === array.length -1){
        return acc/array.length;
    }else{
        return acc;
    }
});

const totalOfOdds = aHundredNums.reduce((accumulator, currentValue, index)=>{
    if (index % 2 === 1){
        return accumulator + currentValue;
    }else{
        return accumulator;
    }
});

/** WHEN MANIPULATING VALUES WITHIN OBJECTS - needs a starting point **/

const valueOfCars = cars.reduce((acc, car)=>{
    return acc + car.price},
    0
);

const totalMileage = cars.reduce((acc, car)=>{
    return acc + car.mileage},
    0
);

/** This creates an array of the  mileages using reduce, but the same can be done with .map **/

const carMileages = cars.reduce((acc, car)=>{
    acc.push(car.mileage);
    return acc;
}, []);